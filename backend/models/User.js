const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

exports.PermissionMongo = model("Permission", new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    permission_type: {
        type: String,
        enum: ['object', 'role'],
        default: 'role'
    }
}));