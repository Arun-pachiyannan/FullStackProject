const mongoose = require("mongoose");

/* ============================
   STUDENT SCHEMA
=============================== */
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  year: Number
});

const Student = mongoose.model("Student", studentSchema);

/* ============================
   COURSE SCHEMA
=============================== */
const courseSchema = new mongoose.Schema({
  courseId: String,
  title: String
});

const Course = mongoose.model("Course", courseSchema);

/* ============================
   ENROLLMENT SCHEMA
=============================== */
const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  marks: Number,
  attendancePercentage: Number
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

/* ============================
   EXPORT ALL MODELS
=============================== */
module.exports = { Student, Course, Enrollment };