const authController = require("../controllers/authController");
const { Router } = require("express");
const router = Router();

const { validateRegister } = require('../middleware/validator');

//register user
router.post("/register", validateRegister, authController.Register);
//login user
router.post("/login");

module.exports = router;