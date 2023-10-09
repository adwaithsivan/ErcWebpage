import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './otherdocuments.css'

export default function OtherDocuments() {
  return (
    <div>
       <Container fluid className='StateAdvisory'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>Other Documents</h1>
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
                  <td> Press Note - Alliance with engineering colleges on technical improvement in electricity</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>  Minutes of State Co-ordination Forum on 19.07.2023</td>
                  <td>19.07.2023 </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> KSERC Honours LBS Institute of Technology for Women with Five Patents Achievement.</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>   KSERC appreciated the patent winners of LBS College</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> Standards for Performance of Distribution Licensees for the Financial Year 2022-23</td>
                  <td> </td>
                  <td> <div className='ordrs-icon-aling'>  <a href="#">view</a> </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>  Meeting Report: Tie-up between Electricity Sector and Engineering Colleges Date: 22/06/2023</td>
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
