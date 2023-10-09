import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './news.css'

export const News = () => {
  return (
    <div>
         <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>News</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='news-container'>
                <Row className='wrapper'>
                    <Col md={4}>
                                            
                          <img className='startup-img' src={require("../../../src/img/news-img-1.jpg")} />
                            <p className='startup-text' > Public hearing on approval cost data 2023 of Distribution works. Petitioner : KSEB Ltd. </p>
                        <a href="/newspage">View Details</a>
                       
                    </Col>

                    <Col md={4}>
                    
                            <img className='startup-img' src={require("../../../src/img/new-img-2.jpg")} />
                            <p className='news-desc' >  Consumer Awareness Programme at Vydyuthi Bhawan, Ponnkunnam Conference Hall-05.07.2023</p>
                        <a href="/newspage2">View Details</a>
                        
                    </Col>

                    <Col md={4}>
                        <div className='smart-city-aling' >
                          
                           <img className='startup-img' src={require("../../../src/img/new-img-3.jpg")} />
                            <p className='news-desc' > Consumer Awareness Programme at Infopark, Kakkanad-11.07.2023</p>
                        <a href="/newspage3">View Details</a>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}
