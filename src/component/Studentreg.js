import React from 'react'
import { Link } from 'react-router-dom';
import '../style/studentreg.css';
function Studentreg() {
  return (
    <div> <div class="container">
    <h2>Student Registration</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name"/>

      <label for="email">Email:</label>
      <input type="text" id="email" name="email" placeholder="Enter your email"/>

      <label for="course">Course:</label>
      <select id="course" name="course">
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="history">History</option>
      </select>

      {/* <input type="submit" value="Register"/> */}
      <th><Link to={"/studenttable"}><button class="but2">Register</button></Link></th>
    </form>
  </div>
  </div>
  )
}

export default Studentreg