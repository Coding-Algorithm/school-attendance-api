const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoute = require("./Routes/student");
const courseRoute = require("./Routes/course");
const attendanceRouter = require("./Routes/attendance");


const PORT = process.env.PORT || 8080


// const multer = require('multer');


// const storage = multer.diskStorage({
// 	destination: "uploads",
// 	//  function (req, file, cb) {
// 	//   cb(null, '/uploads/')
// 	// },
// 	filename: function (req, file, cb) {
// 		const ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
// 	//   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
// 	  cb(null, file.originalname)
// 	}
//   })
  
//   const store = multer({ storage: storage })

app.use(cors({
	origin: "*",
}));

app.use(express.json());

mongoose.connect("mongodb+srv://admin:password1234@courses.oii4vvz.mongodb.net/?retryWrites=true&w=majority", {}, () =>
	console.log("connected to mongodb")
);

app.use("/api/student", studentRoute);
app.use("/api/course", courseRoute);
app.use("/api/attendance", attendanceRouter);

// app.post('/profile', store.single('avatar'), function (req, res, next) {
// 	console.log({mg: req.file})
// 	// const image = req.file

// 	// req.body will hold the text fields, if there were any
//   })
  

app.get("/", (req, res) => {
	res.status(200).json({ msg: "Good" });
});

app.listen(PORT, (req, res) => {
	console.log(`App listening on port ${PORT}`);
});
