import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import './pressrelease.css'

export default function PressRelease() {
  return (
    <div>
       <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>Press Release</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='press-release-search-area'>
        <Row className='reg-row' id="press-release-search-area">
                   <Col md={3} id="year-tab">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="">
            
            <Form.Select aria-label="Default select example">
      <option>year</option>
      <option value="1">2020</option>
      <option value="2">2021</option>
      <option value="3">2022</option>
    </Form.Select>
            </FloatingLabel>
          </Col> 
            <Col md={6} className='form-aling' id='press-form-align'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn-reg'>Search</button>
   </Col>
      </Row>
    <div className='press-table'>
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
                  <td> Press release - Public hearing on 23.08.2023 postponed</td>
                  <td>23.08.2023</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                     <a href="#">view</a>
                  </div>
                   </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>   Press release - Consumer Awareness Programme at Pandalam on 24.08.2023</td>
                  <td>24.08.2023</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                   </div>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>   Press release - Consumer Awareness Programme at Mavelikkara on 24.08.2023</td>
                  <td>24.08.2023</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                     <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>  Consumer Awareness Programme at Mananthavady- 3</td>
                  <td> </td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>  Consumer Awareness Programme at Mananthavady- 2</td>
                  <td></td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                   </div>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td> Consumer Awareness Programme at Mananthavady- 1</td>
                  <td></td>
                  <td>
                  <div className='ordrs-icon-aling'>
                            <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td> Press Note - Consumer Awareness Programme at Mananthavady on 17.08.2023</td>
                  <td>17.08.2023</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>   Press Note - Alliance with engineering colleges on technical improvement in electricity</td>
                  <td></td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>9</td>
                  <td> Press release - Public hearing on Cost Data of KSEB Ltd 23.08.2023</td>
                  <td>23.08.2023</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                  </div>
                  </td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>  Press release - Public hearing on Draft KSERC (CGRF and Electricity Ombudsman) Regulations, 2023 - 25.07.223</td>
                  <td>25.07.223</td>
                  <td>
                  <div className='ordrs-icon-aling'>
                    <a href="#">view</a>
                  </div>
                  </td>
                </tr>
              </tbody>
            </Table>
    </div>
</div>
    </div>
  )
}
