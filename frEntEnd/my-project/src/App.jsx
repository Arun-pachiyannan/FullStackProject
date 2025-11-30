import React from 'react'
import StudentList from './Components/student'
import CourseList from './Components/CourseList'
import EnrollmentList from './Components/EnrollmentList'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Student Enrollment Dashboard</h1>
          <p className="text-sm text-slate-600">Simple CRUD UI (fetches /api endpoints)</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="col-span-1 bg-white p-4 rounded-2xl shadow-sm">
            <StudentList />
          </section>

          <section className="col-span-1 bg-white p-4 rounded-2xl shadow-sm">
            <CourseList />
          </section>

          <section className="col-span-1 md:col-span-2 bg-white p-4 rounded-2xl shadow-sm">
            <EnrollmentList />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
