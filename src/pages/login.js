import React from "react"; 
import './css/login.css';
import skcetlogo from './images/skcetlogo.png';
import { Link } from "react-router-dom";
function Login() {
  return (

    <div className="logLogin" >
      <div className="logo">
        <img src={skcetlogo} alt="" id="skcetlogo" />
      </div>
      <div className="login">    
          <form id="login" name="suForm">    
            <label className="la" ><b>Email Id:</b>
            </label><br />
            <input type="email" name="uname" id="uname" placeholder="EmailID" />    
            <br /><br />    
            <label className="la"><b>Password:</b>    
            </label>    
            <input type="Password" name="Pass" id="Pass" placeholder="Password" onclick="resetBut()" />    
            <br /><br /> <br /> <br />
            <input type="checkbox" id="check" />    
            <span>Remember me</span>    
            <br /><br />    
            <input type="button" name="log" id="log" />
        <div className="but">
          <Link to='/main'>Login</Link>     
        </div>
            <br /><br /> <br /><br />
            <div className="urll">
              <a href="regs.html"><Link to="/reg">Create an Account</Link></a>
            </div>
            <a className="fpass">Forgot Password?</a>    
          </form>
        </div></div>
  );
}
export default Login;