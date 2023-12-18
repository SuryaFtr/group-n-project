const { Event } = require("../models/Event");

const dateNow = new Date();

exports.createEvent = async (req, res) => {
    const {
        pictureLink,
        title,
        description,
        eventDate,
        eventLink
    } = req.body;

    const checkTitle = await Event.findOne({ title: title });
    if (checkTitle) {
        res.status(400).json({ error: "Event title is already exists" });
        return;
    }

    const event = await Event.create({ pictureLink, title, description, eventDate, eventLink });

    event.publishedBy = req.user._id;

    await event.save();
    res.status(201).json({ message: "Event successfully created" });
}