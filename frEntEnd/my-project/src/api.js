// src/api.js
const API_BASE = "http://localhost:5000/api";

// ---------------- Students ----------------
export async function getStudents() {
  const res = await fetch(`${API_BASE}/students`);
  return res.json();
}

export async function createStudent(data) {
  const res = await fetch(`${API_BASE}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateStudent(id, data) {
  const res = await fetch(`${API_BASE}/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${API_BASE}/students/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

// ---------------- Courses ----------------
export async function getCourses() {
  const res = await fetch(`${API_BASE}/courses`);
  return res.json();
}

export async function createCourse(data) {
  const res = await fetch(`${API_BASE}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateCourse(id, data) {
  const res = await fetch(`${API_BASE}/courses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCourse(id) {
  const res = await fetch(`${API_BASE}/courses/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

// ---------------- Enrollments ----------------
export async function getEnrollments() {
  const res = await fetch(`${API_BASE}/enrollments`);
  return res.json();
}

export async function createEnrollment(data) {
  const res = await fetch(`${API_BASE}/enrollments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateEnrollment(id, data) {
  const res = await fetch(`${API_BASE}/enrollments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteEnrollment(id) {
  const res = await fetch(`${API_BASE}/enrollments/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
