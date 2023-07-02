
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Addstudent() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    StudentID: '',
    StudentName: '',
    StudentEmail: '',
    StudentAddress: '',
    StudentPhoneNumber: '',
    StudentGender: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/all/allStudent');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (StudentID) => {
    try {
      await axios.put(`http://localhost:8080/all/update/${StudentID}`, formData);
      fetchData(); // Refetch data after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Student Update Table</h2>
      <table>
        <thead>
          <tr>
            <th>StudentID</th>
            <th>StudentName</th>
            <th>StudentEmail</th>
            <th>StudentAddress</th>
            <th>StudentPhoneNumber</th>
            <th>StudentGender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Student) => (
            <tr key={Student.StudentID}>
              <td>{Student.StudentID}</td>
              <td>
                <input
                  type="text"
                  name="StudentName"
                  value={formData.StudentName}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="StudentEmail"
                  value={formData.StudentEmail}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="StudentAddress"
                  value={formData.StudentAddress}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="StudentPhoneNumber"
                  value={formData.StudentPhoneNumber}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="StudentGender"
                  value={formData.StudentGender}
                  onChange={handleChange}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(Student.StudentID)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Addstudent;

// import React from 'react'
// import '../style/addstudent.css';
// import { Link} from 'react-router-dom';
// function Addstudent() {
//   return (
//     <div>
//         <h2>Update Student</h2> //hili ni table from course Registration
//   <form>
//   <label for="studentID">StudentID:</label>
//     <input type="text" id="studentID" name="StudentID" required/>
//     <label for="name">StudentName:</label>
//     <input type="text" id="name" name="name" required/>
//     <label for="email">StudentEmail:</label>
//     <input type="text" id="email" name="email" required/>
    
//     <label for="age">StudentAddress:</label>
//     <input type="address" id="age" name="address" required/>

//     <label for="number">StudentPhoneNumber:</label>
//     <input type="text" id="number" name="number" required/>

//     <label for="gender">StudentGender:</label>
//     <input type="text" id="gender" name="gender" required/>
    

//     <input type="submit" value="Add Student"/>
//   </form>
//     </div>
//   )
// }

// export default Addstudent