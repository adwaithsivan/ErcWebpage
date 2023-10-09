import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './commissioncard.css'






export default function CommissionCard() {

    return (
        <div>
            <Container>
                <Row className='mt-3' id='commission-card-container'>
                    <Col md={3} className='commettie'>
                        <h5>Chairman</h5>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img className='card-img-commission' src={require('../../../img/jose sir.jpg')} />
                                    <h4 className='card-commission-head'>

                                        Shri. T.K.Jose IAS (Rtd)</h4>
                                </div>
                                <div className="flip-card-back">
                                    <h3>Chairman </h3>
                                    <p>Shri. T.K.Jose IAS (Rtd)</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                        possimus nemo debitis nostrum magnam, tempora dolorem cum eveniet laboriosam
                                        voluptatum fugit earum
                                        rem eius dolorum reprehenderit eligendi quidem ratione quia.</p>
                                </div>
                            </div>
                        </div>
                    </Col>


                   

                        <Col md={3} className='members-profile'>
                            <h5>Member(Law)</h5>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className='card-img-commission' src={require('../../../img/member law (1).jpg')} />
                                        <h4 className='card-commission-head'>

                                            Shri. Adv A.J. Wilson</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Member(Law) </h3>
                                        <p>Shri. Adv A.J. Wilson</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                            possimus nemo debitis nostrum magnam, tempora dolorem cum eveniet laboriosam
                                            voluptatum fugit earum
                                            rem eius dolorum reprehenderit eligendi quidem ratione quia.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col md={3} className='member-2'>
                        <h5>Member(Technical)</h5>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className='card-img-commission' src={require('../../../img/Member.jpg')} />
                                        <h4 className='card-commission-head'>

                                            Shri. B.Pradeep</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Member (Technical) </h3>
                                        <p>Shri. B.Pradeep</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                            possimus nemo debitis nostrum magnam, tempora dolorem cum eveniet laboriosam
                                            voluptatum fugit earum
                                            rem eius dolorum reprehenderit eligendi quidem ratione quia.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                

                    {/* <Col md={3}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img className='card-img-commission' src={require('../../../img/secretary in charge.jpg')} />
                                    <h4 className='card-commission-head'>
                                        
                                    Shri.Satheeshchandran C R</h4>
                                </div>
                                <div className="flip-card-back">
                                    <h3>Secretary </h3>
                                    <p>Shri.Satheeshchandran C R</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem 
                                        possimus nemo debitis nostrum magnam, tempora dolorem cum eveniet laboriosam 
                                        voluptatum fugit earum 
                                        rem eius dolorum reprehenderit eligendi quidem ratione quia.</p>
                                </div>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
