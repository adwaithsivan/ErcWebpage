import React from 'react'

export const InnerStartup1 = () => {
  return (
    <div>
         <Container fluid className='right-to-information' >
    <Row>
      <Col md={12}>
        <div className="organisation-img">
          <h1 className='organisation-head'>Startup</h1>
        </div>
      </Col>
    </Row>
  </Container>
   <Container>
            <Row className='wrapper'>
                <Col md={4}>

                    <div className='smart-city-aling' >
                      <h3 className="startup-heading">Heading</h3>
                       <img className='startup-img' src={require('../../../img/smart-city.jpg')} />
                        <h5 className='smart-city-caption'>Caption</h5>
                        <p className='startup-text' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <a href="#">View Details</a>
                    </div>
                </Col>
                <Col md={4}>

                    <div className='smart-city-aling' >
                      <h3 className="startup-heading">Heading</h3>
                        <img className='startup-img' src={require('../../../img/smart-city.jpg')} />
                        <h5 className='smart-city-caption'>Caption</h5>
                        <p className='startup-text' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        <a href="#">View Details</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}