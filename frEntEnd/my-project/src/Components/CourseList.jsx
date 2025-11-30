import React, { useEffect, useState } from 'react'
import { getCourses, createCourse, updateCourse, deleteCourse } from "../api.js"
import CourseForm from './CourseForm'

function CourseList() {
  const [courses, setCourses] = useState([])
  const [editing, setEditing] = useState(null)

  // Load courses from API
  async function load() {
    const data = await getCourses()   // <-- use getCourses
    setCourses(Array.isArray(data) ? data : [])
  }

  useEffect(() => { load() }, [])

  // Delete a course
  async function remove(id) {
    await deleteCourse(id)           // <-- use deleteCourse
    load()
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Courses</h2>
      <CourseForm onSaved={() => { setEditing(null); load() }} editing={editing} />

      <ul className="mt-4 space-y-2 max-h-80 overflow-auto">
        {courses.map(c => (
          <li key={c._id} className="flex items-center justify-between p-2 border rounded">
            <div>
              <div className="font-medium">{c.courseId} — {c.title}</div>
              <div className="text-sm text-slate-500">Credits: {c.credit} • {c.department}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(c)} className="px-2 py-1 text-sm rounded bg-sky-100">Edit</button>
              <button onClick={() => remove(c._id)} className="px-2 py-1 text-sm rounded bg-rose-100">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList
