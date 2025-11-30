import React, { useEffect, useState } from 'react'
import { getStudents, deleteStudent } from "../api.js"
import StudentForm from './StudentForm'

function StudentList() {
  const [students, setStudents] = useState([])
  const [editing, setEditing] = useState(null)

  // Load students from API
  async function load() {
    const data = await getStudents()
    setStudents(Array.isArray(data) ? data : [])
  }

  useEffect(() => {
    load()
  }, [])

  // Delete a student
  async function remove(id) {
    await deleteStudent(id)
    load()
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Students</h2>

      <StudentForm 
        onSaved={() => { 
          setEditing(null)
          load()
        }} 
        editing={editing} 
      />

      <ul className="mt-4 space-y-2 max-h-80 overflow-auto">
        {students.map(s => (
          <li key={s._id} className="flex items-center justify-between p-2 border rounded">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-slate-500">{s.department} • Year {s.year}</div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => setEditing({
                  _id: s._id,
                  name: s.name,
                  department: s.department,
                  year: s.year,
                  email: s.email
                })}
                className="px-2 py-1 text-sm rounded bg-sky-100"
              >
                Edit
              </button>

              <button 
                onClick={() => remove(s._id)}
                className="px-2 py-1 text-sm rounded bg-rose-100"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default StudentList
