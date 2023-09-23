 import React from "react";
import "./home.css";
import frequency from '../Images/frequently.png'
 import judging from '../Images/judging.png'
import hackathon from '../Images/hackathon.png'
import prizeOne from '../Images/prizes1.png';
import prizeTwo from '../Images/prizes2.png';
import rules from '../Images/Rules.png';
import virtual from '../Images/vr.jpg';
import partners from '../Images/partner.png';
import privacy from '../Images/privacy.png';
import Timeinecomponent from './Timeline'


function Home() {
  return (
    <div className="">
      <section class="header">
        <div class="logo">
          <div class="navbar">
            <h2>
              get<span>linked</span>
            </h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
            </ul>
          </nav>
          

          
        </div>
            <div className="page">
            <h3>Igniting a Revolution in HR innovation</h3>
       <div className="container">
       <div className="content">
          <div className="col-1">
            <h1>
              getlinked Tech <br /> Hackathon <span>1.0</span>
            </h1>
            <p>
            Participate in getlinked tech Hackathon 2023 stand <br /> 
               a chance to win a Big prize
            </p>
            <a href="" className="btn">
              Register 
            </a>
          </div>
          
          
        </div>
       </div>
            </div>
      </section>
            
            {/* ============Intro-getlinked========================= */}

     
         <section className="Intro">
         <div className="container">
        <div className="row">
          
          <div className="col-2">
          <img src={hackathon} style={{width:"300px"}}/> 
          </div>
          <div className="col-2">
            <h1 className="text-1">Introduction to getlinked <br /> <span>techHackathon 1.0</span></h1>

            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a 
              design maverick, or a concept wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world problems, pushing the boundaries
             of technology, and creating solutions that can change the world,
             that's what we're all about!</p>
          </div>
        </div>

      </div>
         </section>

         {/* =====================Rules and Guidelines================ */}
        <section className="Rules">

          
      <div className="small-container">
        <div className="row">
          
         
          <div className="col-2">
           <div className="text-2">
           <h1>Rules and <br /> <span >Guidelines</span></h1>
           </div>

            <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
           clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
               that's what we're all about!
            </p>
          </div>

          <div className="col-2">
          <img src={rules} style={{width:"300px"}}/> 
          </div>
        </div>

        </div>
        </section>

        {/* ========================judging Criteria============= */}

          <section className="judging">
          <div className="small-container">
        <div className="row">
        <div className="col-2">
          <img src={judging} style={{width:"300px"}}/> 
          </div>
         
          <div className="col-2">
                <div className="text-3">
                <h1>Judging Criteria<br /> <span >Key attributes</span></h1>
                </div>

            <p >
            <h4><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
               solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.</h4>

                <h4>
               <span> Functionality:</span> Assess how well the solution works. Does it perform its 
                       intended functions effectively and without major issues? Judges would
                       consider the completeness and robustness of the solution.
                </h4>

                <h4>
                <span>Impact and Relevance:</span> Determine the potential impact of the solution 
                 in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
                </h4>
                
                <h4>
                <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                      Judges would consider the complexity of the code, the use of advanced 
                   technologies or algorithms, and the scalability of the solution.
                </h4>

                <h4>
                <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                        to the rules and guidelines of the hackathon, including deadlines, use of 
                       specific technologies or APIs, and any other competition-specific requirements.
                </h4>
            </p>

            <a href="" class="btn">
               Read More
            </a>
          </div>

          
        </div>

      </div>
          </section>


      {/* ========================Frequently============= */}

      <section className="freqently">
        
      <div className="small-container">
        <div className="row">
          
         
          <div className="col-2">
              <div className="text-4">
              <h1>Frequently Ask<br /> <span >Question</span></h1>
              </div>

            <p >
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
           clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
               that's what we're all about!
            </p>
          </div>

          <div className="col-2">
          <img src={frequency} style={{width:"300px"}}/> 
          </div>
        </div>

      </div>
      </section>

     {/* =======================Winners=============== */}
            <section className="winners">
             <div className="general">
              <div className="cup">
              <img src={prizeOne} style={{width:"300px"}}/>
              </div>
              <div className="medals">
                <div className="Text-6">
                  <h1> Prizes and <br /> <span>Rewards</span></h1>
                  <p>
                    Highlight of the prizes or rewards for winners and <br /> for Participate
                  </p>
                </div>
              <img src={prizeTwo} style={{width:"300px"}}/>
              </div>
             </div>
            

            </section >


              {/* =======================partners=============== */}


        <section className="partners">
         <div>
          <h1>partners and sponsors</h1>
          <p>Getlinked Hackathon 1.0 is honored to have the following major <br /> 
                   companies as its partners and sponsors</p>
         </div>
        <div className="partners-image">
                <img src={partners}/> 
                </div>
        </section>
      

      {/* ========================policy and privacy============= */}
         <section className="policy">
         <div className="privacy"> 
            <div>
            <h1>Privacy Policy and  <br />
              <span>Terms</span></h1>
            <h6>Last updated on September 12, 2023</h6>
            <p>Below are our privacy & policy, which outline a lot of goodies. <br /> 
                it's our aim to always take of our participant</p>

                
              <div className="license">
                <p  >
                  At getlinked tech Hackathon 1.0, we value your privacy <br />
                 and are committed to protecting your personal information. <br />
                 This Privacy Policy outlines how we collect, use, disclose, <br />
                   and safeguard your data when you participate in our tech <br />
                  hackathon event. By participating in our event, you consent <br />
                  to the practices described in this policy. 
                </p>
                  <h5><span>Licensing Policy</span></h5>

                  <h6>Here are terms of our Standard License:</h6>

                   <div className="check">
                   <h4><a href=""><i class="fa-solid fa-check check-2" ></i></a>The Standard License grants you a non-exclusive right to <br />
                      navigate and register for our event</h4>
                    <h4><a href=""><i class="fa-solid fa-check check-2" ></i></a>You are licensed to use the item available at any free source <br />
                      sites, for your project developement</h4>
                   </div>

                   <a href="" className="btn">
                           Register 
                             </a>
              </div>
            </div>
                <div className="privacy-pic">
                <img src={privacy} style={{width:"300px"}}/>
                </div>
                </div>
                </section>

                {/* ========================Footer============= */}

                
             <section className="footer-page">

                <div className="footer">

                <div className="tech">
                  <h1> get<span>linked</span></h1>
                  <p> At getlinked tech Hackathon 1.0, we value your privacy <br />
                 and are committed to protecting your personal information. <br /></p>

                 <h6>Term of Use <span>|</span> Privacy policy</h6>
                </div>
                   

                   <div className="useful">
                     <h2><span>Useful Links</span></h2>
                     <li><a href="">Overview</a></li>
                     <li><a href="">Timeline</a></li>
                     <li><a href="">FAQs</a></li>
                     <li><a href="">Register</a></li>
                     <h2><span>Follow Us</span> <a href=""><i class="fa-brands fa-instagram"></i></a> <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                     <a href=""><i class="fa-brands fa-facebook-f"></i></a> <a href=""><i class="fa-brands fa-linkedin"></i></a></h2>
                   </div>
              
                   <div className="contact">
                    <h2>Contact Us</h2>

                    <h4> <a href=""><i class="fa-solid fa-phone-volume"></i></a>  <span> +34690983</span></h4>
                     <h4><a href=""><i class="fa-solid fa-location-dot"></i></a> <span>27,Alara street <br /> Yaba 100012 <br />Lagos state.</span></h4>
                   </div>










                </div>
             </section>
                
            
                  
                   
         
          

         
















      

          

      
    </div>
  );
}

export default Home;
