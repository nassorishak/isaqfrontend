import React from 'react'
import '../style/login.css';
import { Link } from 'react-router-dom';
function login() {
  return (
    <div>
        <div class="login-form">
<h2>Login</h2>
<form action="login">
  <input type="text" name="username" placeholder="Username" required/><br/><br/>
  <input type="password" name="password" placeholder="Password" required/><br/><br/><br/><br/><br/>
  <Link to={'/login'}><a><input type="submit" value="Login"/></a></Link>
</form>
</div>
    </div>
  )
}

export default login