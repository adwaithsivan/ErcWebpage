import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './capgallery.css'
export const CapGallery = () => {
  return (
    <div>
               
      <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>Consumer Awareness Programme</h1>
            </div>
          </Col>
        </Row  >
      </Container>

      <div className="gallery-wrapper">
        <h3>Consumer Awareness Programme</h3>
        <Row className='mt-2'>
          <Col md={4}>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness- info-1.jpg')} /></figure>
                <p id="cap-img-caption"> Consumer Awareness Programme at Infopark on 11/7/2023-2</p>
                
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness- info-2.jpg')} /></figure>
                <p id="cap-img-caption">Consumer Awareness Programme at Infopark on 11/7/2023-1</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-ponkunam-1.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness programme at Ponkunnam 5/7/2023-2</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>


      <div className="gallery-wrapper">
        <Row className='mt-5'>
          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/baner-1.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness programme at Ponkunnam 5/7/2023-1</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-trissur-1.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness program at Trissur 26/06/2023-2</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-trissur-2.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness program at Trissur 26/06/2023-1</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>


      <div className="gallery-wrapper">
        <Row className='mt-5'>
          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer awareness program at mambad-1.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness program at mambad, Wandoor 24/06/23-2</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Consumer awareness program at mambad-2.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness program at mambad, Wandoor 24/06/23-</p>
              </div>
            </div>
          </Col>
          
         
          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure> <img className='gallery-img' src={require('../../../img/Gallery/Tie up with engineering colleges-1.jpeg')} /></figure>
                <p id="cap-img-caption">Tie up with engineering colleges for research-1</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="gallery-wrapper" id='gallery-wrapper-row3'>
        <Row className='mt-5'>
        <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure><img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-Thalassery-2.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness programme at Thalassery. 21/6/2023-1</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure><img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-Muthakunnam-N-1.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness programme at Muthakunnam N Paravoor-2</p>
              </div>
            </div>
          </Col>

          <Col md={4} id='cap-row-img'>
            <div className="hover02 column">
              <div>
                <figure><img className='gallery-img' src={require('../../../img/Gallery/Consumer-awareness-Muthakunnam-N-2.jpg')} /></figure>
                <p id="cap-img-caption">Consumer awareness programme at Muthakunnam N Paravoor-1</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  )
}
