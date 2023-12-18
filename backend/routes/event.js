const eventController = require("../controllers/eventController");
const permission = require("../permissions");
const { Router } = require("express");
const router = Router();

const { validateEvent } = require('../middleware/validator');

//create event (admin & staff)
router.post("", permission.is_adminOrStaff, validateEvent, eventController.createEvent);
//get all events
router.get("", eventController.getAllEvent);
//get event by id (admin, staff & member) 
router.get("/:id", eventController.getEventById);
//update event (admin & staff)
router.put("/:id");
//delete event (admin & staff)
router.delete("/:id");


module.exports = router;