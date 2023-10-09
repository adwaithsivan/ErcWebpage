import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import './quotation.css'
export default function Quotations() {
  return (
    <div>
        <Container fluid className="StateCoordination">
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className="organisation-head">Quotations</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
       <Row className='wrapper' id="qutation-search">
           <Col md={12} className='form-aling'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn'>Search</button>
   </Col>  
       </Row>
   </Container>

      <Container className="qutation-table">
      <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Quotation Notice - Supply of 1 Lazer printer and 1 Multi Function Printer (Last date 25.08.2023)</td>
                  <td>25.08.2023</td>
                  <td>
                    <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                    </div>
                </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Quotation Notice - Quotations are invited for supply of 1 No. of Lap Top</td>
                  <td> </td>
                  <td>
                    <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                    </div>
                </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Quotation Notice - Scrap Items in the Commission - Last Date 30.06.2023</td>
                  <td>30.06.2023</td>
                  <td>
                    <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                    </div>
                </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Quotation Notice - Supply of 1 No. of lap top (Last date 30.06.2023)</td>
                  <td>30.06.2023</td>
                  <td>
                    <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                    </div>
                </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Quatations are invited for 40 inch / 43 inch Full HD Television for the use of Commission</td>
                  <td></td>
                  <td>
                    <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                    </div>
                </td>
                </tr>

              </tbody>
            </Table>
      </Container>
    </div>
  )
}
