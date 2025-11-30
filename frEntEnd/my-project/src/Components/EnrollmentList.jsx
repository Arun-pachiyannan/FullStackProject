import React, { useEffect, useState } from 'react'
import { 
  getEnrollments, 
  createEnrollment, 
  updateEnrollment, 
  deleteEnrollment,
  getStudents,
  getCourses
} from "../api.js"
import EnrollmentForm from './EnrollmentForm'

function EnrollmentList() {
  const [enrollments, setEnrollments] = useState([])
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])

  async function load() {
    const e = await getEnrollments()
    const s = await getStudents()
    const c = await getCourses()

    setEnrollments(Array.isArray(e) ? e : [])
    setStudents(Array.isArray(s) ? s : [])
    setCourses(Array.isArray(c) ? c : [])
  }

  useEffect(() => { load() }, [])

  async function updateMarks(id, marks) {
    await updateEnrollment(id, { marks })
    load()
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-3">Enrollments</h2>
        <EnrollmentForm onSaved={load} students={students} courses={courses} />
      </div>

      <div className="space-y-2 max-h-96 overflow-auto">
        {enrollments.map(en => (
          <div key={en._id} className="p-3 border rounded flex items-center justify-between">
            <div>
              <div className="font-medium">
                {/* FIXED: using populated objects */}
                {en?.studentId?.name} — {en?.courseId?.title}
              </div>

              <div className="text-sm text-slate-500">
                Marks: {en.marks} • Attendance: {en.attendancePercentage}%
              </div>
            </div>

            <input
              defaultValue={en.marks}
              type="number"
              onBlur={e => updateMarks(en._id, parseInt(e.target.value || 0))}
              className="w-20 p-1 border rounded"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EnrollmentList
