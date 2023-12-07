const userController = require("../controllers/userController");
const permission = require("../permissions");
const { Router } = require("express");
const router = Router();


//get user by id (admin, staff & member) 
router.get("/:id");
//update user data (admin, staff & member) 
router.put("/:id");
//update user password (admin, staff & member) 
router.put("update-password/:id");

//update user role (admin)
router.put("update-role/:id");
//get all user (admin)
router.get("");
//delete user (admin)
router.delete("/:id");

module.exports = router;