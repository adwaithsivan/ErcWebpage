import React from 'react'
import './cgrf.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function CGRF() {
  return (
    <div>
       <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>CGRF</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='licensee-top mt-5'>
                    <Col md={4}>

                        <div className='smart-city-aling' >
                            <img className='licensee-img' src={require('../../img/smart-city.jpg')} />
                            <h5 className='smart-city-head'>Smart City</h5>
                            <p className='smart-city-text' >The Chief Executive Officer, Smart City Kochi Infrastructure Pvt. Ltd, Kakkanad</p>
                        </div>
                    </Col>

                    <Col md={4}>

                        <div className='smart-city-aling' >
                            <img className='licensee-img' src={require('../../img/Infopark.jpg')} />
                            <h5 className='smart-city-head'>Infopark</h5>
                            <p className='smart-city-text' >Infopark Chief Executive Officer, Infopark, Thapasya, Kusumagiri.PO, Kakkanad, Kochi 682 030  
                             <br/>
                            <span  className='licensee-contact-text'> Ph: +91-484-2415217</span>
                            <br/>
                             <span className='licensee-contact-text' >Fax: +91-484-2415240</span>
                    
                             <br/>
                            <span className='licensee-contact-text' >E-mail: info@infoparkkochi.com</span>

                            </p>
                        </div>
                    </Col>

                    <Col md={4}>

                        <div className='smart-city-aling' >
                            <img className='licensee-img' src={require('../../img/KINESCO.jpg')} />
                            <h5 className='smart-city-head'>KINESCO</h5>
                            <p className='smart-city-text'> KINESCO The Managing Director KINESCO Power Utilities Limited IX/159 A, Kusumagiri P.O Kakkanad, Cochin - 30
                            <span  className='licensee-contact-text'> Ph: 0484-2415796, 2415798, 2415614, 2415888</span>
                            <br/>
                             <span className='licensee-contact-text' >Fax: 0484-2415877</span>
                            
                             <br/>
                            <span className='licensee-contact-text' >E-mail: kinfra@vsnl.com</span>
                            </p>
                           
                           


                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}
