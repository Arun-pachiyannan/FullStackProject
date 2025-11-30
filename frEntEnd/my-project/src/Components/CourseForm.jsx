import React, { useEffect, useState } from 'react'
import { createCourse, updateCourse } from '../api.js'

function CourseForm({ onSaved, editing }) {
  const [form, setForm] = useState({ courseId: '', title: '', credit: 3, department: '' })

  useEffect(() => {
    if (editing) setForm(editing)
  }, [editing])

  async function submit(e) {
    e.preventDefault()
    if (editing && editing._id) {
      await updateCourse(editing._id, form) // use updateCourse
    } else {
      await createCourse(form)              // use createCourse
    }

    setForm({ courseId: '', title: '', credit: 3, department: '' })
    onSaved && onSaved()
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        value={form.courseId}
        onChange={e => setForm({ ...form, courseId: e.target.value })}
        placeholder="Course Code"
        className="w-full p-2 border rounded"
      />
      <input
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        value={form.credit}
        onChange={e => setForm({ ...form, credit: parseInt(e.target.value || 1) })}
        placeholder="Credits"
        className="w-full p-2 border rounded"
      />
      <input
        value={form.department}
        onChange={e => setForm({ ...form, department: e.target.value })}
        placeholder="Department"
        className="w-full p-2 border rounded"
      />
      <button className="px-3 py-2 bg-sky-600 text-white rounded">Save</button>
    </form>
  )
}

export default CourseForm
