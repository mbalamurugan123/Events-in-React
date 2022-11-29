import React from "react";
import pp from './images/pp.jpg';
import { Link } from "react-router-dom";
import './css/style2.css';
function Tec_reg4(){
  return(
    <div className="b">
        <div className="a">
          <h1>Paper Presentation</h1>
          <p id="a">
            Paper Presentation is presenting your topic in front of the audience, the way you present your topic, the way you put your points, your presentation style, your language and how promptly and effectively you answer their questions.
            Here you have collect the information about your topic from various sources.
            It can be the internet or some books, journals ,newspaper,magazine etc
            You have to arrange the information in the order
          </p>
          <p id="d">
            1) defining the topic <br />
            2) topic details <br />
            3) current events if any, related to your topic <br />
            4) advantages and the dis-adv. <br />
            5) Causes and their remedies, if any applications.
          </p>
          <p id="a">
            Then you have to prepare the "Abstract" not exceeding 2 pages of the main paper.
            The format in which you have to submit your paper and abstract will be announced later.
          </p>
        </div>
        <div className="c">
          <img src={pp} id="b" alt="" />
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
export default Tec_reg4;