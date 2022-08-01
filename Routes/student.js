const router = require("express").Router();
const Student = require("../models/Student");
const multer = require("multer");

const Storage = multer.diskStorage({
	destination: "studentsAvatar/",
	filename: function (req, file, cb) {
		const ext = file.originalname.substring(file.originalname.lastIndexOf("."));
		const filename = req.body.matricNo.replace(/\//g, "-") + ext;
		cb(null, filename);
	},
});

const store = multer({ storage: Storage });


// get all students

router.get('/', async (req, res) => {
	try {
		console.log("Trying")
		const students = await Student.find({});
		res.status(200).json(students)
	} catch (err) {
		res.status(500).json(err.message)
	}
} )



// add student
router.post("/signup", store.single("image"), async (req, res, next) => {
	try {

		const image = req.file.filename;

		const newStudent = new Student({
			matricNo: req.body.matricNo,
			name: req.body.name,
			image: image,
			course: req.body.course,
			dept: req.body.dept,
			faculty: req.body.faculty,
			email: req.body.email,
			password: req.body.password,
		});
		await newStudent.save();

		res.status(200).json(newStudent);
	} catch (err) {
		console.log("failure Trying");
		res.status(500).json(err.message);
	}
});

// login to account
router.post("/login", async (req, res) => {
	try {
		const student = Student.findOne({ matricNo: req.body.matricNo });
		!student && res.status(404).json("User not found");

		if (req.body.password === student.password) {
			res.status(200).json(student);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
