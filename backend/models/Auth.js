const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { UserMongo } = require("./User");
require('dotenv').config()
class Auth {
    static async authenticate(username, rawPassword) {
        const user = await this.get({ username });
        if (!user) return false;
        const hashedPassword = this.make_password(rawPassword);
        return user.password === hashedPassword;
    }
    static make_password(password) {
        return CryptoJS.HmacSHA256(password, process.env.SECRET, { keySize: 256 / 32, iterations: 1000 }).toString();
    }
    static async create({ username, email, password }) {
        return await UserMongo.create({ username: username, email: email, password: this.make_password(password) });
    }
    static async get_without_password(fieldValuePair, options) {
        return await UserMongo.findOne(fieldValuePair, options).populate('permissions').select("-password");
    }
    static async get(fieldValuePair, options) {
        return await UserMongo.findOne(fieldValuePair, options).populate('permissions');
    }
    static generateToken(user) {
        const expireAt = Math.floor(Date.now() / 1000) + (60 * 60); // 60 mins
        const refreshExpireAt = Math.floor(new Date().setDate(new Date().getDate() + 7)); // 7 days
        const accesToken = jwt.sign({
            _id: user._id,
            exp: expireAt,
            iat: Math.floor(Date.now())
        }, process.env.SECRET);
        const refreshToken = jwt.sign({
            _id: user._id,
            iat: Math.floor(Date.now()),
            exp: refreshExpireAt,

        }, process.env.SECRET); // 1 hour
        return { accesToken, refreshToken, expireAt };
    }
    static async parseToken(token, options) {
        const decoded = jwt.verify(token, process.env.SECRET);
        const { _id } = decoded; // throw error if invalid
        return await this.get_without_password({ _id }, options); // == { id:1, iat: 123123123 , exp: 123123123 }
    }
    static async parseTokenSafe(token, options) {
        try {
            return await this.parseToken(token, options);
        } catch (e) {
            console.log("TOKEN EXPIRE");
            return null;

        }
    }

}

module.exports = Auth;