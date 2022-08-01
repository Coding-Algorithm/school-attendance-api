const router = require("express").Router();
const Course = require("../models/Course");


// get Course
router.get("/", async (req, res) => {
	try {
		const courses = Course.find({})

        res.status(200).json(courses)
	} catch (err) {
		res.status(500).json(err.message);
	}
});


// get Course per lecturer
router.get("/:id", async (req, res) => {
	try {
		console.log(req.params.id)
		const courses = await Course.find({lecturer: req.params.id})

        res.status(200).json(courses)
	} catch (err) {
		res.status(500).json(err.message);
	}
});


// add Course
router.post("/add", async (req, res) => {
	try {
		const newCourse = new Course({
			name: req.body.name,
			courseCode: req.body.courseCode,
			lecturer: req.body.lecturer,
			unit: req.body.unit,
			title: req.body.title,
			dept: req.body.dept,
			faculty: req.body.faculty,
		});

        await newCourse.save()

        res.status(200).json(newCourse)
	} catch (err) {
		res.status(500).json(err.message);
	}
});


// // login to account
// router.post('/login', async (req, res) => {

// })

module.exports = router;
