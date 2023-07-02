import React from 'react'
import '../style/coursetb.css';
import { Link } from 'react-router-dom';
function Coursetable() {
  return (
    <div>
        <h1 class="h1">COURSE TABLE</h1>
        {/* <Link to={'/addstudent'}><a><input type="submit" value="add new user"/></a></Link>  */}
        {/* <button><Link to={"addstudent"}>addstudent</Link></button> */}
        {/* <Link to="addstudent">addstudent</Link> */}
      
<table>
  <tr>
    
    <th>CourseID</th>
    <th>CourseName</th>
    <th>CourseTitle</th>
    <th>CourseCode</th>
    <th>CourseGrade</th>
    {/* <th class="but"><Link to={"/addstudent"}><button>Add</button></Link></th> */}
    <th class="but1"><button>delete</button></th>
    <th><Link to={"/updatestudent"}><button class="but2"style={{paddingRight:"50px",width:"40px"}}>update</button></Link></th>
  </tr>
    <tr>
        <td>Jane Smith</td>
        <td>janesmith@example.com</td>
        <td>janesmiiuuxample.com</td>
        <td>janesm@example.com</td>
        <td>janeple.com</td>

      
        
        
      </tr>
      
       
</table>
    </div>
  )
}

export default Coursetable