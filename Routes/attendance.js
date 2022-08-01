const router = require("express").Router();
const Attendance = require("../models/Attendance");

// add Course
router.post("/mark", async (req, res) => {
	try {
		const newAttendance = new Attendance({
			student: req.body.student,
			course: req.body.course,
			date: req.body.date,
			attended: req.body.attended,
		});

		await newAttendance.save();

		res.status(200).json(newAttendance);
	} catch (err) {
		res.status(500).json(err.message);
	}
});

module.exports = router;
