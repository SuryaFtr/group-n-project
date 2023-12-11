const Auth = require('../models/Auth');
const { PermissionMongo, UserMongo } = require('../models/User');
const { attachPerm, detachPerm } = require('../models/permissions_utils');

exports.getUserProfile = async (req, res) => {
    let query = { username: req.user.username };

    const user = await UserMongo.findOne(query);
    res.status(200).json(user);
}

exports.updateUserData = async (req, res) => {
    res.send('Hello, this is updateUserData!');
}

exports.updateUserPassword = async (req, res) => {
    res.send('Hello, this is updateUserPassword!');
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    const getById = await UserMongo.findOne({ _id: id });

    if (!getById) {
        res.status(401).json({ error: "User is Not Found" });
        return;
    }

    res.status(200).json(getById);
}

exports.updateUserRole = async (req, res) => {
    res.send('Hello, this is updateUserRole!');
}

exports.getAllUser = async (req, res) => {
    res.send('Hello, this is getAllUser!');
}

exports.deleteUser = async (req, res) => {
    res.send('Hello, this is deleteUser!');
}