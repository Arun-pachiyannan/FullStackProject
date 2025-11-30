import React, { useEffect, useState } from 'react'
import { createStudent, updateStudent } from "../api.js"


function StudentForm({ onSaved, editing }) {
  const [form, setForm] = useState({
    name: '',
    department: '',
    year: 1,
    email: ''
  })

  useEffect(() => {
    if (editing) setForm(editing)
  }, [editing])

  async function submit(e) {
    e.preventDefault()

    if (editing && editing._id) {
      await updateStudent(editing._id, form)
    } else {
      await createStudent(form)
    }

    setForm({ name: '', department: '', year: 1, email: '' })
    onSaved && onSaved()
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        required
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />

      <input
        value={form.department}
        onChange={e => setForm({ ...form, department: e.target.value })}
        placeholder="Department"
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        value={form.year}
        onChange={e => setForm({ ...form, year: parseInt(e.target.value || 1) })}
        placeholder="Year"
        className="w-full p-2 border rounded"
      />

      <input
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />

      <button className="px-3 py-2 bg-sky-600 text-white rounded">
        Save
      </button>
    </form>
  )
}

export default StudentForm
