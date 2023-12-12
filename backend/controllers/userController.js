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

exports.getAllUser = async (req, res) => {
    const user = await UserMongo.find().populate("permissions").select("-password");

    res.status(200).json(user);
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

exports.addUserRole = async (req, res) => {
    const { id } = req.params;
    const { permissions } = req.body;

    const getById = await UserMongo.findOne({ _id: id });

    if (!getById) {
        res.status(401).json({ error: "User is Not Found" });
        return;
    }

    const user = getById;
    const perm = await PermissionMongo.findOne({ name: permissions });

    if (!perm) {
        res.status(401).json({ error: "Role is not found" });
        return;
    }

    await attachPerm(user, perm);
    res.json({ message: "Add User Role Success" });
}

exports.removeUserRole = async (req, res) => {
    const { id } = req.params;
    const { permissions } = req.body;

    const getById = await UserMongo.findOne({ _id: id });

    if (!getById) {
        res.status(401).json({ error: "User is Not Found" });
        return;
    }

    const user = getById;
    const perm = await PermissionMongo.findOne({ name: permissions });

    if (!perm) {
        res.status(401).json({ error: "Role is not found" });
        return;
    }
    await detachPerm(user, perm);
    res.json({ message: "Remove User Role Success" });
}

exports.deleteUser = async (req, res) => {
    res.send('Hello, this is deleteUser!');
}