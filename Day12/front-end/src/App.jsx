import './App.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
const API = 'http://localhost:3005/students'; 
import React from 'react'
import MyApp from './MyApp.jsx'

const App = () => {
    const [students, setStudents] = useState([]);
    const [form,setForm] = useState ({name: "", age: ""})
    const fetchStudents = () => {
        axios.get(API) 
        .then(gfg => setStudents(gfg.data))
        .catch(err => console.error("Error fetching students:", err));
    }
  
    useEffect ( () => {
        fetchStudents()
    }, [])

    const handleChange = (e) => {
      const {name,value} = e.target;
      setForm(prev => ({ ...prev, [name] : value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { _id, name , age} = form 

        //  if _id exists, it is an update (PUT)
        if(_id) {
            axios.put(`${API}/${_id}`, {name,age})
              .then(()=>{
                setForm({ name : "", age : "", _id:""}) // clear data
                fetchStudents() // auto update
              })
        } else {
        
        axios.post(API, {name,age})
              .then(() => {
                  setForm({name: "", age: ""}) // to clear the form/input tags
                  fetchStudents() // to auto update or refresh
              })

        // console.log("My Data")
         }
      }

        

    const editStudent = (ss) => {
      setForm(ss) // form will show vlaues to edit
    }

    const deleteStudent = (id) => {
      axios.delete(`${API}/${id}`) // delete route
          .then(() => fetchStudents()) // auto refresh
    }

    return (
        <div>
            <h1>Student Data Management </h1>
            <form onSubmit={handleSubmit}>
                Name : <input
                    type='text'
                    name='name'
                    onChange = {handleChange}
                    value={form.name}
                    placeholder='Enter Name'
                    required
                />
                Age : <input
                    type='number'
                    name='age'
                    value={form.age}
                    onChange = {handleChange}
                    placeholder='Enter Age'
                    required />
                <button 
                  type='submit'> 
                  
                  {form._id ? "Update" : "Add"} 
                    </button>            
            </form>            

            {students.map((ss) => (
                <li key={ss._id}> {ss._id} -- {ss.name} -- {ss.age} 
                      <button onClick={()=>editStudent(ss)}> 
                      Update 
                      </button>

                    <button onClick={()=>deleteStudent(ss._id)}> 
                      Delete 
                    </button> 
                </li>
            ))}
            <MyApp />
        </div>
    )
}

export default App