import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";


  function App() {
    const [user, Setuser] = useState([])
    const submitHandler = (e) => {
      e.preventDefault();
      const data = {
        name: e.target.userName.value,
        email: e.target.userEmail.value,
        contact: e.target.userContact.value,
        password: e.target.userPassword.value
      }

      if(!data.name || !data.email || !data.contact || !data.password){
        alert("All field requird")
        return
      } 

      
    
      Setuser([...user, data])
      e.target.reset()
    }

    function deleteHandler(delIndex) {
      const newData = user.filter(
        (d, index) => {
          return index != delIndex ? true : false
        }
      )
      Setuser(newData)
    }

  return (
    <div className="container mt-2">
  <h2 className="mb-3 bg-info text-center bg-gradient ps-2 rounded">User Registration Form</h2>
  <form onSubmit={submitHandler} id="userForm">
    <div className="mb-0">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input type="text" className="form-control" name='userName' placeholder='Enter your name' id="name" required="" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input type="email" className="form-control" name='userEmail' placeholder='Enter your email' id="email" required="" />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Phone
      </label>
      <input type="tel" className="form-control" name='userContact' placeholder='Enter your mobile number ' id="phone" required="" />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        name='userPassword'
        id="password"
        placeholder='Enter your password' 
        required=""
      />
      <div>
      <FaEyeSlash />
      </div>

    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  <hr className="my-3" />
  <h2 className="bg-warning text-center bg-gradient ps-2 rounded">User Data Table</h2>
  <table className="table table-bordered table-hover mt-3">
    <thead className="table-dark">
      <tr>
        <th>S No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="userTableBody">
      {
        user.map((data,i) => {
          return (
            <tr key={i}>
            <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
            <td>{data.password}</td>
            <td onClick={()=> deleteHandler(i)} className='btn text-light bg-primary bg-gradient'>Delete</td>
          </tr>
        
          )
        }
        )
      }
     
    </tbody>
  </table>
</div>

  )
}


export default App;
