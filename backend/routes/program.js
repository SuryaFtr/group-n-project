const programController = require("../controllers/programController");
const permission = require("../permissions");
const { Router } = require("express");
const router = Router();

const { validateProgram } = require('../middleware/validator');


//create program (staff)
router.post("", permission.is_adminOrStaff, validateProgram, programController.createProgram);
//get all program
router.get("");
//get program by id
router.get("/:id");
//update program (admin & staff)
router.put("/:id", permission.is_adminOrStaff);
//delete program (admin & staff)
router.delete("/:id", permission.is_adminOrStaff);


module.exports = router;