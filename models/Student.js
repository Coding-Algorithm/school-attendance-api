const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    matricNo: String,
    name: String,
    image: String,
    course: String,
    dept: String,
    faculty: String,
    email: String,
    password: String,
    
})

module.exports = mongoose.model("Student", StudentSchema)