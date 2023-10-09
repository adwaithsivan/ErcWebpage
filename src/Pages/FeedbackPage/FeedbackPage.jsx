import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './feedbackpage.css'
import CaptchaTest from './CaptchaTest';



export default function FeedbackPage() {
  return (
    <div>
       <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>Feedbacks</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

         <Container >
          <div className='form-feedback'>
            
          <Form> 
          <Row>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full name" id="feedback-input"/>
        </Form.Group>
  
        <Form.Group as={Col} controlId="formGridEmail" className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="feedback-input" />
        </Form.Group>
      

      <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter Address' id="feedback-input" />
      </Form.Group>
      
   <Form.Group className='mt-3'>
       <Form.Label>Select</Form.Label >
      <Form.Select aria-label="Default select example" id="feedback-input">
      <option>Open this select menu</option>
      <option value="1">Reporting a problem</option>
      <option value="2">Suggestions</option>
      <option value="3">Complaints</option>
      <option value="4">User Experience</option>
      <option value="5">Compliments</option>
      <option value="6">Others</option>
    </Form.Select>
      
   </Form.Group>

     
      <Form.Group controlId="formFile" className="mt-3" >
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" id="feedback-input" />
      </Form.Group>

      <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Remark</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Remarks...' id="feedback-input" />
      </Form.Group>

      <CaptchaTest/>
      </Row>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
          </div>

         </Container>
    </div>
  )
}
