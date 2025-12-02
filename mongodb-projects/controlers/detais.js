const { Student, Course, Enrollment } = require("../modules/studentDet");

// STUDENTS
const getStudents = async (req, res) => {
  try { const students = await Student.find(); res.status(200).json(students); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

const addStudent = async (req, res) => {
  try { const student = await Student.create(req.body); res.status(201).json(student); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

const updateStudent = async (req, res) => {
  try { 
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated); 
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteStudent = async (req, res) => {
  try { 
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// COURSES
const getCourses = async (req, res) => {
  try { const courses = await Course.find(); res.status(200).json(courses); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

const addCourse = async (req, res) => {
  try { const course = await Course.create(req.body); res.status(201).json(course); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

const updateCourse = async (req, res) => {
  try { 
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated); 
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteCourse = async (req, res) => {
  try { 
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// ENROLLMENTS
const getEnrollments = async (req, res) => {
  try { 
    const data = await Enrollment.find()
      .populate("studentId")
      .populate("courseId");
    res.status(200).json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const addEnrollment = async (req, res) => {
  try { const enrollment = await Enrollment.create(req.body); res.status(201).json(enrollment); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};

const updateEnrollment = async (req, res) => {
  try { 
    const updated = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated); 
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteEnrollment = async (req, res) => {
  try { 
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// EXPORT ALL
module.exports = {
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
};
