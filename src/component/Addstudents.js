import React from 'react'
import '../style/newstudent.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Addstudents() {
  const [data, setData] = useState({
    studentID: '',
    StudentName: '',
    StudentdEmail: '',
    StudentAddress: '',
    StudentPhNumber: '',
    StudentGender: '',
  });
const {StudentID,StudentName,StudentEmail,StudentAddress,StudentPhNumber,StudentGender}=data;
  const onInputChange = (e) => {
    setData({...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
      await axios.post('http://localhost:8080/all/addstudents',data)
      Navigate("/")
    };
    
  
  return (
    <div>
    
        <h2 style={{textAlign:"center"}}>AddStudents</h2>
  <form onSubmit={(e)=>onSubmit(e)}>
    <label for="Id">StudentID:</label>
    <input type="text" id="name" name="StudentID" required/>
    <label for="name">StudentName:</label>
    <input type="text" id="name" name="name"  required/>
    <label for="name">StudentEmail:</label>
    <input type="text" id="email" name="email" required/>

    <label for="address">StudentAddress:</label>
    <input type="text" id="address" name="address"  required/>
    
    <label for="phono">StudentPhNumber:</label>
    <input type="text" id="phno" name="phno"  required/>
    <label for="phono">StudentGender:</label>
    <input type="text" id="gender" name="gender"  required/>
    <input type="submit" onSubmit={(e)=>onSubmit(e)} value="Add Student"/>
  </form>
    </div>
  )
}

export default Addstudents