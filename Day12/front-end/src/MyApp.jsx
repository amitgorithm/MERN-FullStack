import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

const API = 'http://localhost:3002/students'

export default function MyApp() {
  const [students, setStudents] = useState([])
  const [form, setForm] = useState({ name: "", age: "", _id: "" })

  const fetchStudents = () => {
    axios.get(API)
      .then(res => setStudents(res.data))
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { _id, name, age } = form

    if (_id) {
      axios.put(`${API}/${_id}`, { name, age })
        .then(() => {
          setForm({ name: "", age: "", _id: "" })
          fetchStudents()
        })
    } else {
      axios.post(API, { name, age })
        .then(() => {
          setForm({ name: "", age: "", _id: "" })
          fetchStudents()
        })
    }
  }

  const editStudent = (student) => {
    setForm(student)
  }

  const deleteStudent = (_id) => {
    axios.delete(`${API}/${_id}`)
      .then(() => fetchStudents())
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Data Management</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input 
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter age"
            required
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          {form._id ? "Update" : "Submit"}
        </button> */}
        <button
  type="submit"
  className={`btn ${form._id ? 'btn-warning' : 'btn-primary'}`}
>
  {form._id ? "Update" : "Submit"}
</button>
      </form>

      {/* <ul className="list-group mt-4">
        {students.map((student) => (
          <li key={student._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{student.name}</strong> — {student.age} years
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => editStudent(student)}>Update</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul> */}

      <table className="table table-striped table-bordered mt-4">
  <thead className="table-dark">
    <tr>
        <th> Sr.No </th>
      <th>Name</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student,i) => (
      <tr key={student._id}>
        <td><strong>{i+1}</strong></td>
        <td><strong>{student.name}</strong></td>
        <td>{student.age} years</td>
        <td>
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => editStudent(student)}
          >
            Update
          </button>
    

          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteStudent(student._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}
