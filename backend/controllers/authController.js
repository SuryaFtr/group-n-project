const Auth = require("../models/Auth");
const { PermissionMongo } = require('../models/User');
const { attachPerm, detachPerm } = require('../models/permissions_utils');

exports.Register = async (req, res) => {
    additionalData = {
        pictureLink: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        profession: ""
    }
    const { email, username, password } = req.body;
    const checkUsername = await Auth.get({ username })
    const checkEmail = await Auth.get({ email })

    if (checkEmail) {
        res.status(400).json({ error: "Email already registered" });
        return;
    }
    if (checkUsername) {
        res.status(400).json({ error: "Username already exists" });
        return;
    }

    const user = await Auth.create({ additionalData, email, username, password });
    const userPerm = await PermissionMongo.findOne({ name: "member" });
    await attachPerm(user, userPerm);

    res.status(201).json({ message: "Successfully Registered" });

}

