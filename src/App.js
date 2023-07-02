import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Coursereg from './component/Coursereg';
import Dashboard from './component/Dashboard';
import Coursetable from './component/Coursetable';
import Addstudent from './component/Addstudent';
import Updatestudent from './component/Updatestudent';
import Studentreg from './component/Studentreg';
import Studenttable from './component/Studenttable';
import Addstudents from './component/Addstudents';
import Updatestudents from './component/Updatestudents';
import DataTable from './component/Data Table';
import StudentApdate from './component/StudentApdate';
import UpdateForm from './component/UpdateForm';


function App() {
  return (
    
      <Router>
      
        <Routes>
           <Route path="dashboard" element={<Dashboard/>} /> 
          <Route path="login" element={<Dashboard/>} />  
          <Route path="/" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="coursereg" element={<Coursereg/>} />
          <Route path="coursetable" element={<Coursetable/>} />
          <Route path="addstudent" element={<Addstudent/>}/>
          <Route path= "updatestudent" element={<Updatestudent/>}/>
          <Route path= "studentreg" element={<Studentreg/>}/>
          <Route path= "studenttable" element={<Studenttable/>}/>
          <Route path= "addstudents" element={<Addstudents/>}/>
          <Route path= "updatestudents/:StudentID" element={<Updatestudents/>}/>
          <Route path= "data table" element={<DataTable/>}/>
          <Route path= "studentapdate" element={<StudentApdate/>}/>
          <Route path= "updateform/:StudentID"element={<UpdateForm/>}/>
        </ Routes>
      </Router>
  );
}

export default App;
