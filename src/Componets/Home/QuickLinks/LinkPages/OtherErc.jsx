import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const OtherErc = () => {
  return (
    <div>
         <Container fluid className='StateAdvisory'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>Other ERCs</h1>
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
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> <a href='http://www.tnerc.gov.in/'>Tamilnadu Electricity Regulatory Commission</a></td>
                 
                </tr>
                <tr>
                  <td>2</td>
                  <td> <a href='https://kerc.karnataka.gov.in/'>Karnataka Electricity Regulatory Commission</a></td>
                  
                </tr>
                
              </tbody>
            </Table>
       </div>
    </div>
  )
}
