import React from 'react'
import './footer2.css'
import { Col, Container,Row } from 'react-bootstrap'


export default function Footer2() {
  return (
    <div className='footer-main' id='footer-main'>
         
                <img src={require('../../../img/Gallery/arch-dam-idukki.jpg')} className='dam-image'/>
        
       <div className='text'>
        <Container>
            
        <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div className="footer__about">
              <div className="footer_about_logo">
                <a href="./index.html">
                 
                     <img 
                      style={{ height: "70px", width: "70px" }}
                     className='' 
                     src={require('../../../img/logo.png')} 
                     />

                </a>
                <h2 style={{ fontSize: "20px", marginLeft:"11px" }}>
                Kerala State Electricity Regulatory Commission

                 
                </h2>
              </div>
              <ul className="address-text">
                <li>  GX46+RJ8, K.P.F.C. Bhavanam, CV Raman Pillai Rd,</li>
                <li> Vellayambalam, Thiruvananthapuram, Kerala 695010</li>
                <li>Working hours : 09:30 am - 5:30 pm</li>
                <li>Except Saturdays, Sundays and Public Holidays</li>
               

                
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 offset-lg-1" id="footer-links">
            <div className="footer__widget1">
              <h6>Quick Links</h6>
              <ul className="p-0">
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/categories">Gallery</a>
                </li>
                <li>
                  <a href="/contact">Archives</a>
                </li>

                <li>
                  <a href="/contact">Right to Information</a>
                </li>

                <li>
                  <a href="/contact">Careers</a>
                </li>

                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6> Join Our Newsletter Now</h6>

              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button
                  
                  type="submit"
                  className="site-btn"
                >
                  Subscribe
                </button>
              </form>
              <div className="footer-social-icon">
                <span className=" footer_widget_social">Follow us</span>
                <img width="40" height="40" src="https://img.icons8.com/material/48/40C057/whatsapp--v1.png" alt="whatsapp--v1"/>
                <img width="40" height="40" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                <img width="40" height="40" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                <img width="40" height="40" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid "> 
        <div className="row ">
          <div className="col-lg-12 ">
            <div className="footer__copyright">
              <p  style={{ fontSize: "11px"  }} className="text-center ">
              Copyright  © 2023 Kerala State Electricity Regulatory Commission. Powered by
               <span className='asianet-text'><a> Asianet Hosting Service | Mail Login</a></span>
              </p>
              <div className="footer_copyright_payment">
                <img src="img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        </Container>
       </div>
    </div>
  )
}
