import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const UpdateForm = () => {

    const {StudentID} = useParams();
  const [formData, setFormData] = useState({
    studentID: '',
    studentName: '',
    studentEmail: '',
    studentAddress: '',
    studentPhoneNumber: '',
    studentGender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8080/all/update/'+StudentID, formData);
      alert('Student data updated successfully');
      // Perform any additional actions after successful update
    } catch (error) {
      console.error(error);
    }
  };





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/all/byId/'+StudentID); // Replace with your backend API endpoint
        setFormData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  
  return (
    <div style={{backgroundColor:"whitesmoke",height:"545px"}}>
<form onSubmit={handleSubmit}>
    <h1 style={{textAlign:"center",marginBottom:"50px",width:"500px"}}>Update Student</h1>
      <div>
        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          value={formData.StudentID}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studentName">Student Name:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studentEmail">Student Email:</label>
        <input
          type="email"
          id="studentEmail"
          name="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studentAddress">Student Address:</label>
        <input
          type="text"
          id="studentAddress"
          name="studentAddress"
          value={formData.studentAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studentPhoneNumber">Student Phone Number:</label>
        <input
          type="tel"
          id="studentPhoneNumber"
          name="studentPhoneNumber"
          value={formData.studentPhoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studentGender">Student Gender:</label>
        <select
          id="studentGender"
          name="studentGender"
          value={formData.studentGender}
          onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div style={{display:"flex",flexDirection:"row"}}>
      <div>
      <button type="submit" onSubmit={handleSubmit} style={{backgroundColor:"green",color:"white",width:"150px",height:"40px"}}>Update</button>
      </div>
      <div>
      <th><Link to={`/studenttable`}><button style={{"background-color":"green",marginLeft:"0px",textAlign:"center",color:"white"}}>cancel</button></Link></th>
      </div>
      
      
      </div>
    </form>
    </div>
  );
};

export default UpdateForm;
