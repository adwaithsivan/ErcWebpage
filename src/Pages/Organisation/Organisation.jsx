import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import './organisation.css'
import Chart from '../../Componets/Chart/Chart'

export default function Organisation() {
  return (
    <div>
       <Container fluid className='Organisation'>

        <Chart/>
        {/* <Row className=''>
          <Col md={12}>
            <div className="organisation-img">
            <h1 className='organisation-head'>Organisation</h1>
            </div>
          </Col>
        </Row>
       </Container>

        <Container>
          <Row className='mt-3'>
             
            <Col md={12}> 
             <div className='cart-img-aling'>
             <img className='cart-img' src={require('../../img/Gallery/Organisation chart.png')} />
            </div>
            </Col>
          </Row> */}
        </Container>
    </div>
  )
}
