const programController = require("../controllers/programController");
const permission = require("../permissions");
const { Router } = require("express");
const router = Router();


//create program (admin & staff)
router.post("/");
//get all user
router.get("");
//get user by id
router.get("/:id");
//update user data (admin & staff)
router.put("/:id");
//delete user (admin & staff)
router.delete("/:id");


module.exports = router;