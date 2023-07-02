import React from 'react'
import '../style/dash.css';
import { Link } from 'react-router-dom';
// import Coursereg from './Coursereg';
function Dashboard() {
  return (
    <div>
        <div class="header">
    <h1>Student Registration Dashboard</h1>
  </div>

  <div class="container">
    <div class="dashboard">
      <div class="card">
        <Link to={'/coursereg'}><a><input type="submit" value="Course Registration"/></a></Link>
      </div>

      <div class="card">
      <Link to={'/studenttable'}><a><input type="submit" value="Student Registration"/></a></Link>
      </div>

      <div class="card">
        <a href="#">Register</a>
      </div>
      <div class="card">
        <a href="#">Register</a>
      </div>
      <div class="card">
      <Link to={'/'}><a><input type="submit" value="logout"/></a></Link>
      </div>
      
    </div>
  </div>
    </div>
  )
}

export default Dashboard