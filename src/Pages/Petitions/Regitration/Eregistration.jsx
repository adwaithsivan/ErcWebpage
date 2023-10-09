import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './e-registration.css'

export default function Eregistration() {
  return (
    <div>
      <Container fluid className='StateAdvisory'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>E-Registration</h1>
            </div>
          </Col>
        </Row>
       </Container>

<Container  className="e-registration-container">
      <Form>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
        </Col>
      </Row>


      <Row className= "mt-3">
        <Col>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter Password"
      />
        </Col>
        <Col>
        <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Confirm Password"
      />
        </Col>
      </Row>
      <button type="submit" className="btn btn-primary" id="e-reg-btn">
            Register
          </button>
      </Form>
</Container>
    </div>
  )
}
