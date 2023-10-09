import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import './careerspage.css'


import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Careerspage() {
  return (
    <div>
      <Container fluid className='career'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>Careers</h1>
            </div>
          </Col>
        </Row>
      </Container>
       
       <Container>
       <Row className='wrapper'>
           <Col md={6} className='form-aling'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn'>Search</button>
   </Col>  
       </Row>
   </Container>

      <Container>
        <Row className='mt-5'>
         
          <Col md={12} className='wrapper'>
            
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Last Date</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CGRF - Member</td>
                  <td>Notification - Applications are invited for the Consumer Grievances Redressal Forum (CGRF) Members under various licensees</td>
                  <td>14.06.2023</td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>
                <tr>
                  <td>Junior Consultant (Technical)</td>
                  <td>Junior Consultant (Technical) Rank list</td>
                  <td></td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>

                <tr>
                  <td>Consultant (Public Relation) - Date extended</td>
                  <td></td>
                  <td></td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>


                <tr>
                  <td>Expression of Interest - Internal Auditors</td>
                  <td>Notification - KSERC seeks expression of interest from Chartered Accountant firms in Thiruvananthapuram - Appointment as Internal Auditors for the Financial Year 2023-24</td>
                  <td></td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>


                <tr>
                  <td>Consultant (Public Relation)</td>
                  <td>Applications are invited for the post of Consultant (Public Relation) on contract basis</td>
                  <td>30.03.2023</td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>

                <tr>
                  <td>Junior Consultant (Technical)</td>
                  <td>Applications are invited for the post of Junior Consultant (Technical) on Contract Basis </td>
                  <td>22.03.2023</td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>

                <tr>
                  <td>Consultant / Additional Consultant (Technical)</td>
                  <td>Applications are invited for the post of Consultant / Additional Consultant (Technical) on Contract Basis</td>
                  <td> 22.03.2023</td>
                  <td>
            <div className='ordrs-icon-aling'>
            <a href="#">view</a>
          </div>
        </td>
                </tr>

               


              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
