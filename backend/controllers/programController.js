const { Program } = require("../models/Program");

const dateNow = new Date();

exports.createProgram = async (req, res) => {
    const {
        pictureLink,
        title,
        description,
        programDate
    } = req.body;

    const checkTitle = await Program.findOne({ title: title });
    if (checkTitle) {
        res.status(400).json({ error: "Program title is already exists" });
        return;
    }

    const program = await Program.create({ pictureLink, title, description, programDate });

    program.publishedBy = req.user._id;

    await program.save();
    res.status(201).json({ message: "Program successfully created" });
}

exports.getAllProgram = async (req, res) => {
    const program = await Program.find().select("-__v");

    res.status(200).json(program);
}