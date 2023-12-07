const authController = require("../controllers/authController");
const { Router } = require("express");
const router = Router();

//register user
router.post("/register");
//login user
router.post("/login");

module.exports = router;