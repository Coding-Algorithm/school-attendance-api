const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
	student: {
		type: String,
		required: true,
	},
	course: {
		type: String,
		required: true,
	},
	date: {
        type: String,
        required: true,
    },
	attended: {
        type: Boolean,
        required: true
    },
	time: String,
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
