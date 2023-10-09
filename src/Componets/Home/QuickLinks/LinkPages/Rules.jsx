import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export default function Rules() {
  return (
    <div>
         <Container fluid className='StateAdvisory'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>Rules</h1>
            </div>
          </Col>
        </Row>
       </Container>

       <Container>
        <Row className='wrapper' id='other-docs-search-bar'>
           <Col md={12} className='form-aling'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn'>Search</button>
   </Col>     
       </Row>
       </Container>

       <div className='other-docs-table'>
       <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Download</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> Rules</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> Rules</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                
              </tbody>
            </Table>
       </div>
    </div>
  )
}
