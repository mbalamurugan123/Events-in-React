import React from "react";
import pm from './images/pm.jpeg';
import { Link } from "react-router-dom";
import './css/style2.css';
function Tec_reg3(){
  return(
    <div className="b">
        <div className="a">
          <h1>Poster Making</h1>
          <p id="a">
            A poster should be visually attractive and readable from a distance.
            It very clearly mentions the theme or the topic, the schedule of an event, and the respective occasion.
            It can be of the following types:-
          </p>
          <p id="d">1) An appeal for awareness or support, help or action, a warning, or a caution. <br /> 2) In the form of an invitation like posters for carnivals, fests, concerts, exhibitions, etc. <br />3) Workshops, seminars.</p> 
        </div>
        <div className="c">
          <img src={pm} id="b" alt="" />
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
export default Tec_reg3;