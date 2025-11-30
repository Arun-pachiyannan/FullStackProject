const express = require("express");
const router = express.Router();

const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,

  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,

  getEnrollments,
  addEnrollment,
  updateEnrollment,
  deleteEnrollment
} = require("../controlers/detais");

// STUDENTS
router.get("/students", getStudents);
router.post("/students", addStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

// COURSES
router.get("/courses", getCourses);
router.post("/courses", addCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);

// ENROLLMENTS
router.get("/enrollments", getEnrollments);
router.post("/enrollments", addEnrollment);
router.put("/enrollments/:id", updateEnrollment);
router.delete("/enrollments/:id", deleteEnrollment);

module.exports = router;
