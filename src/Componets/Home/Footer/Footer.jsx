import React from 'react'
import './footer.css'

export default function 
() {
  return (
    <footer className="footer spad mt-5">
      <div className="container-footer">
        <div className="row ">
          <div className="col-lg-4 col-md-4">
            <div className="footer__about">
              <div className="footer_about_logo">
                <a href="./index.html">
                  {/* <img
                    style={{ height: "70px", width: "70px" }}
                    src={logo8}
                    alt=""
                  /> */}
                     <img 
                      style={{ height: "70px", width: "70px" }}
                     className='' 
                     src={require('../../../img/logo.png')} 
                     />

                </a>
                <h2 style={{ fontSize: "20px", marginLeft:"11px" }}>
                Kerala State Electricity Regulatory Commission

                  {/* <br />
                  <span style={{ fontSize: "14px" }}>AUTO & ACCESSORIES</span> */}
                </h2>
              </div>
              <ul className="p-0">
                <li>  GX46+RJ8, K.P.F.C. Bhavanam, CV Raman Pillai Rd,</li>
                <li> Vellayambalam, Thiruvananthapuram, Kerala 695010</li>
                <li>Working hours: 9:30 am - 5:30 pm</li>
                <li>Except Sundays and Public Holidays</li>
                {/* <li> Sun: Closed</li> */}

                
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 offset-lg-1 footer" id="footer">
            <div className="footer__widget">
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
          <div className="col-lg-4 col-md-5">
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
                <i className="fa-brands fa-whatsapp"></i>
                <i className="instagram-bg fa-brands fa-instagram insta"></i>
                <i className=" facebook-bg fa-brands fa-facebook-f"></i>
                <i className="youtub fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid "> 
        <div className="row ">
          <div className="col-lg-12 ">
            <div className="footer__copyright">
              <p  style={{ fontSize: "11px"  }} className="text-center ">
              Copyright  © 2023 Kerala State Electricity Regulatory Commission. Powered by Asianet Hosting Service
               <span className='asianet-text'><a>Asianet Web | Mail Login</a></span>
              </p>
              <div className="footer_copyright_payment">
                <img src="img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
