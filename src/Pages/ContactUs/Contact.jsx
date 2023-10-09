import React from 'react';
// import gif from '../../img/contactgif.jpeg';
import Box from '@mui/material/Box';
import './contact.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Grid, TextField, } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';


export default function Contact() {
  return (
     <div class="shadow p-3 mb-5 bg-body rounded">
       <div style={{ backgroundColor: 'white' }}>



        <div className="container">
          <div className="row" id="contact-wrapper">
                     
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-3" id='map'>
              <div>
              <iframe className='map-aliing' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1008141.6674533162!2d75.97388006430224!3d9.239523372631542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b05bbcafe933311%3A0xec1760eda90f0966!2skserc!3m2!1d8.5070214!2d76.9616162!5e0!3m2!1sen!2sin!4v1690026142354!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1008163.97436334!2d76.07246724398685!3d9.231726729836225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d9.9643388!2d76.3289937!4m5!1s0x3b05bbcafe933311%3A0xec1760eda90f0966!2skserc!3m2!1d8.5070214!2d76.9616162!5e0!3m2!1sen!2sin!4v1689676290327!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="formcontact mt-4">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Place" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Email" fullWidth />
                  </Grid>

                  <Grid item xs={12}>

                    <TextField
                      label="Message"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} container justifyContent="center">
                  <button type="button" class="btn btn-outline-primary">Submit</button>
                  </Grid>
                </Grid>

              </div>

            </div>
              
            
           
          </div>
        </div>



        <Container>

          <div className='details'>
          <Row className='office-adress mt-5' id='contact-row'>
            <h3 className='our-address-head'>Contact Details</h3>
            <Col md={4} className='address-img-contai'>
              <img className='contact-img-office' src={require('../../img/Gallery/office1.jpeg')} />
            </Col>

            <Col md={4}>
              <p className='address-text'>GX46+RJ8, K.P.F.C. Bhavanam, <br /> CV Raman Pillai Rd,
                Vellayambalam, <br /> Thiruvananthapuram, Kerala 695010</p>

                <img width="22" height="22" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-telephone-contact-flatart-icons-solid-flatarticons-1.png" alt="#"/>
                <span className='fax-text '><a>  0471 2735544</a></span>
                <br />

                <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/fax.png" alt="fax"/>
              <span className='fax-text '><a> 0471-2735599</a></span>
              <br></br>

              <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/secured-letter--v1.png" alt="secured-letter--v1"/>
              <span className='fax-text '><a href="kserc@erckerala.org"> kserc@erckerala.org</a></span>
              <br></br>

              <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/earth-planet--v2.png" alt="earth-planet--v2"/>
              <span className='fax-text '><a href="www.erckerala.org">www.erckerala.org</a></span>
              <br></br>
            </Col>

            <Col md={4} className='secretary'>
              <h5>Secretary</h5>
              <p className='fax-text' id='secrartary-name'>  Shri.Satheeshchandran C R </p>
             
              <img width="22" height="22" src="https://img.icons8.com/material/48/phone--v1.png" alt="phone--v1"/>
                <span className='detail-text '><a>  +91 9446354423 </a></span>
                <br />
                <img width="22" height="22" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-telephone-contact-flatart-icons-solid-flatarticons-1.png" alt="#"/>
                <span className='detail-text '><a>  0471 2735544(Common)</a></span>
                <br />
                <img width="22" height="22" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-telephone-contact-flatart-icons-solid-flatarticons-1.png" alt="#"/>
                <span className='detail-text '><a>  0471 2735588(Direct)</a></span>
                <br />

                <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/secured-letter--v1.png" alt="secured-letter--v1"/>
                <span className='detail-text '><a href = "mailto: secretarykserc@gmail.com">secretarykserc@gmail.com</a></span>
              
              </Col>
          </Row>

          <Row>
              
              {/* <div className='secretary'>
              
              </div> */}
           
          </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}






{/* src={require("../../img/secretary in charge.jpg")}  */}

// Fax:0471-2735599    0471 2735544    Shri.Satheeshchandran C R   Mob: +91 9446354423     LAN: 0471 2735544(Common)    LAN: 0471 2735588(Direct)   Email:     kserc@erckerala.org      www.erckerala.org