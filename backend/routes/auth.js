const authController = require("../controllers/authController");
const { Router } = require("express");
const router = Router();

const { validateRegister, validateLogin } = require('../middleware/validator');

//register user
router.post("/register", validateRegister, authController.Register);
//login user
router.post("/login", validateLogin, authController.Login);

module.exports = router;