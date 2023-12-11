const userController = require("../controllers/userController");
const permission = require("../permissions");
const { Router } = require("express");
const router = Router();


//get user profile (admin, staff & member) 
router.get("/profile", permission.is_authenticated, userController.getUserProfile);
//update user data (admin, staff & member) 
router.put("/:id", permission.is_authenticated, userController.updateUserData);
//update user password (admin, staff & member) 
router.put("/update-password/:id", permission.is_authenticated, userController.updateUserPassword);

//get user by id (admin) 
router.get("/:id", permission.is_admin, userController.getUserById);
//update user role (admin)
router.put("/update-role/:id", permission.is_admin, userController.updateUserRole);
//get all user (admin)
router.get("/", permission.is_admin, userController.getAllUser);
//delete user (admin)
router.delete("/:id", permission.is_admin, userController.deleteUser);

module.exports = router;