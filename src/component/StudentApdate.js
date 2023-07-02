import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentApdate() {
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

export default StudentApdate;
