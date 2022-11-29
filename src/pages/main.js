import React from "react";
import './css/main.css';
import { Link } from "react-router-dom";
import logo1 from './images/logo1.jpg';
import blind_img from './images/blind_img.jpeg';
import rapid_img from './images/rapid_img.jpeg';
import pm from './images/pm.jpeg';
import paper from './images/paper.jpeg';
import apti from './images/apti.jpeg';
import athletics from './images/athletics.jpg';
import treasure from './images/treasure.jpg';
import badminton from './images/badminton.jpg';
import dance from './images/dance.jpg';
import basketball from './images/basketball.jpg';
import tec from './images/tec.png';
function Main(){
  return(
          <div className="main-body">
            <div className="logo1">
              <div>
                <img style={{width: '400px',float: 'left'}} id="logo-img" src={logo1} alt="" />
              </div>
              <div className="det">
                <a id="alink"><Link to="/main">Home</Link></a>
                <a id="alink">About us</a>
                <a id="alink"><Link to="/reg">Register</Link></a>
                <a id="alink"><Link to="/">SignIn</Link></a>
              </div>
            </div>
            <div className="main-body">
              <h1  style={{textAlign: 'center'}}>EVENTS</h1>
              <img  className="main-img" style={{border: '2px solid black'}} src={tec} alt="" />
              <marquee className="scroll" direction="up">
                <div className="scroll1">
                  <h3>21 July</h3><h4>Rapid Fire</h4>
                </div>
                <div className="scroll1">
                  <h3>22 July</h3><h4>Treasure Hunt</h4>
                </div>
                <div className="scroll1">
                  <h3>27 July</h3><h4>Dance</h4>
                </div>
                <div className="scroll1">
                  <h3>5 August</h3><h4>Athletics</h4>
                </div>
              </marquee><br />
              <div className="tech">
                <h1 className="h">Technical Events</h1>
                <div className="main">
                  <Link to="/tec_reg1">

                    <div className="img1">
                      <img src={blind_img} alt="" style={{borderRadius: '30px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Blind coding</p>
                      <p>Do you think you code like a pro? Do you think coding comes naturally to you? Well, think again!
                        Presenting Blind Coding, a simple coding competition where you’ll be given even simpler problems to code. Sounds too easy? It isn’t! The catch is that you will be forbidden to look at your code!</p>
                    </div>
                  </Link>
                 
                </div>
                <div className="main">
                  <Link to="/tec_reg2">
                    <div className="img1">
                      <img src={rapid_img} style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                    
                      <p>Rapid Fire</p>
                      <p>describe or answers questions  that come very quickly one after another.
                        Answer the techie questions ! Win the competition !</p>
                    </div>
                  </Link>
    
                </div>
                <div className="main">
                  <Link to="/tec_reg3">

                    <div className="img1">
                      <img src={pm} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Poster Making</p>
                      <p>A poster is a very useful means of making an announcement or appeal, issuing a notice, advertising a product or bringing about awareness on any issue of public interest. A poster should be visually attractive and readable from a distance</p>
                    </div>
              
                  </Link>
                </div>  
                <div className="main1">
                  <Link to="/tec_reg4">

                    <div className="img2">
                      <img src={paper} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det2">
                      <p>Paper Presentation</p>
                      <p>Presentations usually require preparation, organization, event planning, writing, use of visual aids, dealing with stress, and answering questions.“The key elements of a presentation consists of presenter, audience, message, reaction and method to deliver speech for organizational success in an effective manner</p>
                    </div>
                  </Link>
                </div>
                <div className="main">
                  <Link to="/tec_reg5">

                    <div className="img1">
                      <img src={apti} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Aptitude</p>
                      <p>Aptitude is inborn potential to perform certain kinds of activities, whether physical or mental, and whether developed or undeveloped. Aptitude is often contrasted with skills and abilities, which are developed through learning</p>
                    </div>
                
                  </Link>
                </div>
              </div>
              <div className="nontech">
                <hr />
                <h1>Non-Technical Events</h1>
                <div className="main">
                  <Link to="/tec_reg6">

                    <div className="img1">
                      <img src={athletics} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Athletics</p>
                      <p>Athletics is a group of sporting events that involves competitive running, jumping, throwing, and walking.[1] The most common types of athletics competitions are track and field, road running, cross country running, and racewalking</p>
                    </div>
                
                  </Link>
                </div>
                <div className="main">
                  <Link to="/tec_reg7">

                    <div className="img1">
                      <img src={treasure} style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Treasure Hunt</p>
                      <p>Treasure hunt (game), a game simulating a hunt for treasure</p>
                    </div>
                  </Link>
                </div>
                <div className="main">
                  <Link to="/tec_reg8">

                    <div className="img1">
                      <img src={badminton} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Badminton</p>
                      <p>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side)</p>
                    </div>
                  </Link>
                
                </div>
                <div className="main1">
                  <Link to="/tec_reg9">

                    <div className="img2">
                      <img src={dance} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det2">
                      <p>Dance</p>
                      <p>Dance is a performing art form consisting of sequences of movement, either improvised or purposefully selected. This movement has aesthetic and often symbolic value.[nb 1] Dance can be categorized and described by its choreography</p>
                    </div>
                  
                  </Link>
                </div>
                <div className="main">
                  <Link to="/tec_reg10">

                    <div className="img1">
                      <img src={basketball} alt="" style={{borderRadius: '30px', height: '250px',width: '400px',float: 'left'}} />
                    </div>
                    <div className="det1">
                      <p>Basketball</p>
                      <p>describe or answers questions  that come very quickly one after another.
                        Answer the techie questions ! Win the competition !</p>
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        );
      }
export default Main;