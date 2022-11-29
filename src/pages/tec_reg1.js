import React from "react";
import bc from './images/bc.jpg';
import { Link } from "react-router-dom";
 import './css/style2.css';
function Tec_reg1(){
  return(
    <div className="b">
    <div className="a">
      <h1>Blind Coding</h1>
      <p id="a">
        Blind Coding is an individual event.
        The compiler provided will be Turbo-C.
        Each participant has to type the code for the given problem, with MONITOR screen OFF.
        Participants whose code gets compiled will be selected for next round.
        Participants whose code gets executed will be given higher preference.
        The second preference will be given to code with least number of errors.
        In case of tie in number of errors, Time of Submission will be considered.
        The monitor will be turned on once every 3 minutes.
      </p>
    </div>
    <div className="c">
      <img  src={bc} id="b" alt="" />
      <br />
      <div className="z">

    <button id="tecbut"><a href="regs1.html">Register</a></button>
    <div className="overlay">
    <form>  
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
        </div></form>
    </div>
      </div>
    </div>
    
  </div>
  );
}
export default Tec_reg1;