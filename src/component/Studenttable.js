import React, { useEffect, useState } from 'react'
import '../style/studenttable.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Studenttable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:8080/all/allStudent')
      .then(response => {
        setData(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = async (StudentID) => {
    try {
      await axios.delete(`http://localhost:8080/all/delete/${StudentID}`);
      //fetchData(); // Refetch data after successful deletion
      alert("Deleted successfully");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  
  return (
    <div>
      <h2 style={{textAlign:"center"}}>StudentTable</h2>
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
    {data.map(item => (
      <tr key={item.StudentID}>
        <td>{item.StudentID}</td>
        <td>{item.StudentName}</td>
        <td>{item.StudentEmail}</td>
        <td>{item.StudentAddress}</td>
        <td>{item.studentPhoneNumber}</td>
        <td>{item.StudentGender}</td>
        <td class="action-buttons">
            <div style={{display:"flex",flexDirection:"row"}}>
            <div>
           <th><Link to={`/updateform/${item.StudentID}`}><button  style={{"background-color":"blue"}}>update</button></Link></th>
        </div>
        <div>
        <th><Link to={"/data table"}><button class="but3">Add</button></Link></th>
        </div>
        <div>
        <button style={{"background-color":"red",height:"40px",width:"65px"}} onClick={() => handleDelete(item.StudentID)}>delete</button>
        </div>


            </div>
         
         </td>
      </tr>
    ))}
    </tbody>
  </table>
  </div>
  )
}

export default Studenttable