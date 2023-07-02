import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../style/updatestudents.css';
function Updatestudents() {

  const {StudentID} = useParams();
  return (
    <div>
          <div class="container">
    <h2>Update Student Information</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" value={StudentID} name="name" placeholder="Enter your name" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required/>

      <label for="dob">Date of Birth:</label>
      <input type="text" id="dob" name="dob" placeholder="Enter your date of birth" required/>

      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label for="address">Address:</label>
      <input type="text" id="address" name="address" placeholder="Enter your address" required/>

      <input type="submit" value="Update"/>
    </form>
  </div>
    </div>
  )
}

export default Updatestudents