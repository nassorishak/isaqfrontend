import React from 'react'
import '../style/update.css';
import { Link } from 'react-router-dom';
function Updatestudent() {
  return (
    <div style={{backgroundColor:"whitesmoke",height:"545px"}}>
        <h2 style={{textAlign:"center"}}>Update Student Course</h2>
  <form action="/update_course" method="POST">
    <label for="student_id">CourseID:</label>
    <input type="text" id="student_id" name="student_id" required/><br/><br/>
    <label for="course">CourseName:</label>
    <input type="text" id="coursename" name="coursename" required/><br/><br/>
    <label for="course">CourseTitle:</label>
    <input type="text" id="coursetitle" name="coursetitle" required/><br/><br/>
    <label for="course">CourseCode:</label>
    <input type="text" id="coursecode" name="coursecode" required/><br/><br/>
    <label for="course">CourseGrade:</label>
    <input type="text" id="coursegrade" name="coursegrade" required/><br/><br/>
    <input type="submit" value="Update Course"/>

  </form>
    </div>
  )
}

export default Updatestudent