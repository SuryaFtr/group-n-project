const { News } = require("../models/News");
const { UserMongo } = require('../models/User');
const path = require('path');

//Create News is Admin
exports.createNews = async (req, res) => {
    try {
        const { title, text, imgUrl } = req.body; 

        if (!title || !text) {
            return res.status(400).json({ message: 'Title and text are required fields.' });
        }

        const user = await UserMongo.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (req.files && req.files.image) {
            let fileName = Date.now().toString() + req.files.image.name;
            const __dirname = path.dirname(require.main.filename);

            req.files.image.mv(path.join(__dirname, 'uploads', fileName));

            const newNewsWithImage = new News({
                username: user.username,
                title,
                text,
                imgUrl: fileName,
                author: req.userId,
            });

            await newNewsWithImage.save();

            // Use push instead of addToSet
            user.News.push(newNewsWithImage);

            await user.save();

            return res.json(newNewsWithImage);
        }

        const imgUrlToUse = imgUrl || '';

        const NewsWithoutImage = new News({
            username: user.username,
            title,
            text,
            imgUrl: imgUrlToUse,
            author: req.userId,
        });

        await NewsWithoutImage.save();

        user.News.push(NewsWithoutImage);

        await user.save();

        return res.json(NewsWithoutImage);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error.' });
    }
};

// Get All News is Admin, Staff, & Member
exports.getAllNews = async (req, res) => {
    try {
        const allNews = await News.find().sort('-createdAt'); 
        const popularNews = await News.find().limit(5).sort('-views');

        if (!allNews) return res.json({ message: 'No found News' });

        res.json({ allNews, popularNews }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};

// Get By Id
exports.getById = async (req, res) => {
    try {
		const News = await News.findByIdAndUpdate(req.params.id, {
			$inc: { views: 1 },
		})
		res.json(News)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

// Get My News
exports.getMyNews = async (req, res) => {
    try {
        const user = await UserMongo.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const list = await Promise.all(
            user.News.map((newsId) => News.findById(newsId).populate('author', 'username'))
        );

        res.json(list);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};

// Remove News (admin or staff)
exports.removeNews = async (req, res) => {
    try {
        const deletedNews = await News.findByIdAndDelete(req.params.id);

        if (!deletedNews) return res.json({ message: 'News not found' });

        await UserMongo.findByIdAndUpdate(req.user, {
            $pull: { News: req.params.id },
        });

        res.json({ message: 'News has been removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { title, text, id } = req.body;

        const updatedNews = await News.findByIdAndUpdate(id, { title, text }, { new: true });

        if (!updatedNews) {
            return res.status(404).json({ message: 'News not found' });
        }

        if (req.files && req.files.image) {
            let fileName = Date.now().toString() + req.files.image.name;
            const __dirname = path.dirname(require.main.filename);

            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName));

            updatedNews.imgUrl = fileName || '';
        }

        await updatedNews.save();

        res.json(updatedNews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};

