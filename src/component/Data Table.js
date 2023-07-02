import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DataTable() {
  const [formData, setFormData] = useState({
    StudentID: '',
    StudentName: '',
    StudentEmail: '',
    StudentAddress: '',
    StudentPhoneNumber: '',
    StudentGender: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:8080/all/addStudent',formData);
      setFormData({
        StudentID: '',
        StudentName: '',
        StudentEmail: '',
        StudentAddress: '',
        StudentPhoneNumber: '',
        StudentGender: '',
      });
      console.log('Data added successfully');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div style={{height:"550px",backgroundColor:"whitesmoke"}}>
      <h2 style={{textAlign:"center"}}>Add Student</h2>
      
      <form>
        <label>
          StudentID:
          <input
            type="text"
            name="StudentID"
            value={formData.StudentID}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          StudentName:
          <input
            type="text"
            name="StudentName"
            value={formData.StudentName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          StudentEmail:
          <input
            type="text"
            name="StudentEmail"
            value={formData.StudentEmail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          StudentAddress:
          <input
            type="text"
            name="StudentAddress"
            value={formData.StudentAddress}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          StudentPhNumber:
          <input
            type="text"
            name="StudentPhoneNumber"
            value={formData.StudentPhoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          StudentGender:
          <input
            type="text"
            name="StudentGender"
            value={formData.StudentGender}
            onChange={handleChange}
          />
        </label>
        <br />
    <div style={{display:"flex",flexDirection:"row"}}>
  <div>
  <button type="button" onClick={handleAdd} style={{backgroundColor:"lightgreen",height:"40px",marginInlineEnd:"70px"}}>
          Add Student
        </button>
        </div>
      <div>
      <th><Link to={`/studenttable`}><button style={{"background-color":"Lightgreen",marginLeft:"0px",textAlign:"center",color:"blue"}}>cancel</button></Link></th>
      </div>
        </div>

      
      </form>
      
    </div>
  );
}

export default DataTable;
