import React from "react";
import basketball from './images/basketball.jpg';
import { Link } from "react-router-dom";
 import './css/style2.css';
function Tec_reg10(){
  return(
    <div className="b" >
    
    <div className="a">
      <h1>BASKETBALL</h1>
      <p id="a">
        RULES: <br />
        <br />1.A player cannot run with the ball, the player must throw it from the spot on which he catches it, allowance to be made for a man who catches the ball when running at a good speed.The ball must be held in or between the hands; the arms or body must not be used for holding it.
        <br />2.Striking at the ball with the fist is violation of rules. <br />
        <br />VENUE: SKCET KRISHNA HALL
        <br />TIMING: 7 AM TO 10 AM
      </p>
    </div>
    <div className="c">
      <img id="b" src={basketball} alt="" />
      <br />
      <div className="z">
    <button id="tecbut"><a href="regs1.html">Register</a></button>
    <div className="overlay"><form>  
        <h1 className="hed"> Student Registration Form</h1>
        <hr />  
        <div className="container">  
          <label> Firstname: </label><br />
          <input id="in" type="text" name="firstname" defaultValue="Balamurugan" placeholder="Firstname" size={15} required />   <br />
          <label> Lastname: </label>    <br />
          <input id="in" type="text" name="lastname" defaultValue="M" placeholder="Lastname" size={15} required />   <br />
          <div>  
            <label>   
              Course :  
            </label>   
            <select>  
              <option value="AI">AI &amp; DS</option>  
              <option value="Course">Course</option>  
              <option value="CSE">CSE</option>  
              <option value="IT">IT</option>  
              <option value="ECE">ECE</option>  
              <option value="EEE">EEE</option>  
              <option value="MECH">MECH</option>  
              <option value="CIVIL">CIVIL</option>
            </select>  
          </div>  
          <div>  
            <label>   
              Gender :  
            </label> 
            <input type="radio" defaultValue="Male" name="gender" defaultChecked /> Male   
            <input type="radio" defaultValue="Female" name="gender" /> Female   
            <input type="radio" defaultValue="Other" name="gender" /> Other  
            <br /><br />
            <label>   
              Phone :  
            </label>  <br />
            <input type="text"  name="country code" style={{width:'2%'}} id="in" placeholder="Country Code" defaultValue={+91} size={2} className="num" />   
            <input type="text" name="phone" id="in" className="num1" defaultValue={9363423876} placeholder="phone no." size={10} required />  <br />
            <label htmlFor>Current Address : </label><br />
            <input type="text" id="in"  defaultValue="No.18 East Street,Panruti,Cuddalore District-607103" /><br />
            <label htmlFor="email"><b>Email</b></label>  <br />
            <input type="text" id="in" defaultValue="727721euai011@skcet.ac.in" placeholder="Enter Email" name="email" required />  <br />
          </div>  
          <input type="checkbox" id="in" required /><label id="le" htmlFor>I confirmed my details</label><br /><br />
          <a href="main.html"><button type="submit" className="registerbtn" ><Link to="/main">Register</Link></button></a>
        </div></form></div>
      </div>
    </div>
  </div>
  );
}
export default Tec_reg10;