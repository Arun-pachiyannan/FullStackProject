import React, { useState, useEffect } from 'react'
import { createEnrollment } from '../api.js'  // <-- fixed import

function EnrollmentForm({ onSaved, students = [], courses = [] }) {
  const [form, setForm] = useState({ studentId: '', courseId: '', marks: 0, attendancePercentage: 0 })

  useEffect(() => {
    if (students.length && !form.studentId)
      setForm(prev => ({ ...prev, studentId: students[0]._id }))

    if (courses.length && !form.courseId)
      setForm(prev => ({ ...prev, courseId: courses[0]._id }))
  }, [students, courses])

  async function submit(e) {
    e.preventDefault()
    await createEnrollment(form)   // <-- replaced apiPOST
    setForm({ studentId: '', courseId: '', marks: 0, attendancePercentage: 0 })
    onSaved && onSaved()
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <select value={form.studentId} onChange={e => setForm({ ...form, studentId: e.target.value })} className="p-2 border rounded">
        {students.map(s => (
          <option key={s._id} value={s._id}>{s.name}</option>
        ))}
      </select>

      <select value={form.courseId} onChange={e => setForm({ ...form, courseId: e.target.value })} className="p-2 border rounded">
        {courses.map(c => (
          <option key={c._id} value={c._id}>{c.courseId}</option>
        ))}
      </select>

      <input type="number" value={form.marks} onChange={e => setForm({ ...form, marks: parseInt(e.target.value || 0) })} className="p-2 border rounded w-24" placeholder="Marks" />

      <input type="number" value={form.attendancePercentage} onChange={e => setForm({ ...form, attendancePercentage: parseInt(e.target.value || 0) })} className="p-2 border rounded w-28" placeholder="Attendance %" />

      <button className="px-3 py-2 bg-emerald-600 text-white rounded">Enroll</button>
    </form>
  )
}

export default EnrollmentForm
