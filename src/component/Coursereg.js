import React from 'react'
import '../style/coursereg.css';
import { Link } from 'react-router-dom';

function Coursereg() {
  return (
    <div style={{backgroundColor:"wheat",height:"545px"}}>
         <h1 class="h1" style={{textAlign:"center"}}> Course Registration Form</h1>
  <form>
  <label for="id">CourseID:</label>
    <input type="text" id="courseID" name="id" required/>
    <label for="name">CourseName:</label>
    <input type="text" id="name" name="name" required/>

    <label for="title">CourseTitle:</label>
    <input type="title" id="ctitle" name="cotitle" required/>

    <label for="code">CourseCode:</label>
    <input type="text" id="code" name="code" required/>
    <label for="address">CourseGrade:</label>
    <input type='grade' id="grade" name="grade" required/><br/><br/>
{/* <input type="submit" value="Register"/> */}
    <Link to={'/coursetable'}><a><input type="submit" value="Register"style={{backgroundColor:"black"}}/></a></Link>
  </form>
    </div>
  )
}

export default Coursereg