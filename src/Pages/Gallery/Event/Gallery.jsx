import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './maingallery.css'



export default function Gallery() {
  return (
    <div className='gallery-container'>

      <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>Gallery</h1>
            </div>
          </Col>
        </Row  >
      </Container>

<div className="gallery-wrapper" id='gallery-wrapper'>

<Row className='mt-3'>
          <Col md={4}>
          <h3>State Co-ordination Forum</h3>
            <div className="hover02 column">
              
              <div>
                <a href='/scfgallery'><figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')} /></figure></a>
               
              </div>
            </div>
          </Col>

          <Col md={4} id='image-row'>
          <h3>Consumer Awareness Programme</h3>
            <div className="hover02 column">
              
              <div>
              <a href='/capgallery'><figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness- info-1.jpg')} /></figure></a>
              </div>
            </div>
          </Col>
          {/* <Col md={4} id="thumbnails">
          <h3>Consumer Awareness Programme</h3>
            <div className="hover02 column">
              <div>
                <a href='/capgallery'><figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness- info-1.jpg')} /></figure></a>
                 <span id="img-caption"> Consumer Awareness Programme at Infopark on 11/7/2023-2</span>
              </div>
            </div>
          </Col> */}
           <Col md={4} id='image-row'>
          <h3>Engineering College Meeting</h3>
            <div className="hover02 column">
              
              <div>
              <figure> <img className='gallery-img' src={require('../../../img/Gallery/Engineering-College-Meeting-2 (1).jpeg')} /></figure>
              </div>
            </div>
          </Col>

          {/* <Col md={4} id="thumbnails">
          <h3>Engineering College Meeting</h3>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Engineering-College-Meeting-2 (1).jpeg')} /></figure>
                <span>Engineering College Meeting on 22.06.2023-3</span>
              </div>
            </div>
          </Col> */}

        </Row>
</div>


     
    </div>

  )
}
