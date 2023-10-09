import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ombudsman.css'
import Button from 'react-bootstrap/Button';

export default function () {
    return (
        <div>
            <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'> Electricity Ombudsman</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='wrapper'>
                    <Col md={6}>
                        <img className='ombuds-img' src={require('../../img/ombuds-img.jpeg')} />

                    </Col>

                    <Col>
                        <h4>Shri . A. Chandrakumaran Nair,
                        </h4>
                        <p className='ombudsman-content'>Electricity Ombudsman is a statutory authority appointed or designated by the State
                            Commission.  Any consumer aggrieved by non-redressal of the grievance under CGRF, may
                            approach the Electricity Ombudsman. The Ombudsman has been entrusted with the task of
                            settling the grievance of consumers as per the provisions of KSERC (Consumer Grievance
                            Redressal and Electricity Ombudsman)
                            Regulations 2005.</p>

                        <p className='ombudsman-location-head'>The office of the Electricity Ombudsman located at :</p>

                        <p className='ombudsman-location-text'>The State Electricity Ombudsman,
                            D.H Road, Offshore Road Junction,<br/> Near Gandhi Square,

                            Ernakulam, Kerala - 682 016</p>

                            <p className='ombudsman-contact'>Phone :<span className='ombudsman-contact-numb' >0484-2346488</span> </p>
                            <p className='ombudsman-contact'>Mobile : <span className='ombudsman-contact-numb' >+91 8714356488</span> </p>
                            <p className='ombudsman-contact'>Email : <span className='ombudsman-contact-numb' ><a href=''>ombudsman.electricity@gmail.com</a></span> </p>
                            <p className='ombudsman-contact'>Website : <span className='ombudsman-contact-numb' ><a href=''> www.keralaeo.org   </a></span></p>

                            <p className='ombudsman-latest-text'>For latest Orders of the Ombudsman<span><Button className='ombudsman-bt' variant="">Click here</Button></span></p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

