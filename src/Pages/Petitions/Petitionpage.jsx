import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TabArchives from "react-bootstrap/Tab";
import TabsTabArchives from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import { Fragment } from "react";
import "./petitionspage.css";

export default function Petitionpage() {
  return (
    <div>
      <Container fluid className="right-to-information">
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className="organisation-head">Petitions</h1>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container id="petition" className="petition">
<Col md={3} id="petition-btn">
<div className='pulse2'>
                <p className='blink-hard2'> new</p>
              </div>
              
            <a href="/e-filling">
              {" "}
              <button type="button" class="btn btn-primary btn-lg ptn-btn" id="e-filling-btn">
                Petition e-filing
              </button>
            </a>
          </Col>
</Container>
      <Container>
        <Row className="petition-search-area" id="petition-search-area">
                   <Col md={3} id="year-tab">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label=""
            >
              <Form.Select aria-label="Floating label select example">
                <option>Year</option>
                <option value="1">2001</option>
                <option value="2">2002</option>
                <option value="3">2003</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md={3} id="licence-bar">
            <FloatingLabel
              controlId="floatingSelectGrid"
              label=""
            >
              <Form.Select aria-label="">
                <option>--Licensee--</option>
                <option value="1">Smart City</option>
                <option value="2">Military Engineering Service</option>
                <option value="4">Rubber Park India Limited</option>
                <option value="5">Cochin Special Economic Zone Authority (CSEZA)</option>
                <option value="6">Thrissur Corporation Electricity Department</option>
                <option value="7">Technopark</option>
                <option value="8">Kannan Devan Hills Plantations Company (P) Ltd</option>
                <option value="8">Cochin Port Trust</option>
                <option value="8">Kerala State Electricity Board Limited</option>
              </Form.Select>
            </FloatingLabel>
            </Col> 
  
            <Col md={6} className='form-aling'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>



   <button type="button" class="btn btn-outline-primary" id='search-btn'>Search</button>

   </Col>
        </Row>
        
      </Container>
      <Container className="Archives">
        <Row className="wrapper">
          <Col md={12}>
            {/* <img className='Archives-img' src={require('../../img/organisation-baner.jpg')} /> */}
            <TabsTabArchives
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <TabArchives eventKey="home" title="   ARR Petitions">
                <div className="archive-scroll">
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className="table-no-aling">Sr.No. </th>
                        <th>OP No.</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-no-aling">1</td>
                        <td> OP 18/2023</td>
                        <td>
                          OP 18/2023 - Additional submission for the Tariff
                          revision proposal of KSEB Ltd. - In reply to
                          clarification sought by the Commission - KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td className="table-no-aling">2</td>
                        
                        <td> </td>
                        <td>
                          {" "}
                          Revised Petition for the approval of ARR & ERC for the
                          control period 2022-2027 - Cochin Port Trust
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">3</td>
                        <td> OP 18/2023 </td>
                        <td>
                          OP 18/2023 - Additional submission for the Tariff
                          revision proposal of KSEB Ltd. -Green Energy tariff -
                          KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">4</td>
                        <td> </td>
                        <td>
                          {" "}
                          Petition for the approval of ARR & ERC for the control
                          period 2022-2027 - Cochin Port Trust
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">5</td>
                        <td> </td>
                        <td>
                          Petition for the approval of ARR & ERC for the control
                          period 2022-2027 - KPUPL
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">6</td>
                        <td> </td>
                        <td>
                          Petition for the approval of ARR & ERC for the control
                          period 2022-2027 - KPUPL
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">7</td>
                        <td> </td>
                        <td>
                          {" "}
                          Petition for approval of ARR & ERC for the control
                          period 2022-2027 - Smart City
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">8</td>
                        <td>  OP 18/2023</td>
                        <td>
                          OP 18/2023 - Revised Petition for the approval of ARR
                          & ERC for the control period 2023-24 to 2026-27
                          (Tariff Revision) - KSEB Ltd.
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">9</td>
                        <td> </td>
                        <td>
                          {" "}
                          Petition for approval of ARR & ERC for the Control
                          Period 2022-2027 (Original Petition + Revised
                          Petition) - Infopark
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">10</td>
                        <td> </td>
                        <td>
                          {" "}
                          Petition for approval of ARR & ERC for the Control
                          Period 2022-2027 (Original Petition + Revised
                          Petition) - TCED
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">11</td>
                        <td> </td>
                        <td>
                          Petition for approval of ARR & ERC for the Control
                          Period 2022-2027 (Original Petition + Revised
                          Petition) - CSEZA
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </TabArchives>
              <TabArchives eventKey=" Other Petitions" title=" Other Petitions">
                <div className="archive-scroll">
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className="table-no-aling">Sr.No.</th>
                        <th>OP No.</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-no-aling">1</td>
                        <td> OP 36/2023 </td>
                        <td>
                          OP 36/2023-Additional submission given on Cost Data
                          -2023 - KSEB Ltd
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td className="table-no-aling">2</td>
                        <td> OP 44/2023 </td>
                        <td>
                          {" "}
                          OP 44/2023 – Petition seeking modification of the
                          order dated 07.06.2023 in OP No.24/2023 – time limit
                          fixed for the interim arrangement of scheduling of
                          power under DBFOO. - KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td className="table-no-aling">3</td>
                         <td> OP 45/2023  </td>
                        <td>
                          {" "}
                          OP 45/2023 – Petition seeking modification of the
                          order dated 07.06.2023 in OP No. 25/2023. – 500 MW RTC
                          power under FOO basis. Petitioner : KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">4</td>
                         <td> </td>
                        <td>
                          {" "}
                          Petition filed by Central Institute of Petrochemicals
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">5</td>
                         <td> </td>
                        <td>
                          {" "}
                          Petition for approval of draft PPA between KSEB and
                          CIAL - M/s CIAL
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">6</td>
                         <td> </td>
                        <td>
                          {" "}
                          Petition for determination of single point power
                          supply and its conditions - M/s Nippon Infra Projects
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">7</td>
                         <td> </td>
                        <td>
                          {" "}
                          Petition for granting of connectivity to the proposed
                          110 KV Substation at Laloor, Thrissur. - TCED
                        </td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">8</td>
                         <td> </td>
                        <td>
                          {" "}
                          Petition for recovery of 4th Quarter fuel surcharge
                          January 2023 to March 2023 - KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">9</td>
                         <td>  OP No. 35/2023</td>
                        <td>
                          {" "}
                          OP No. 35/2023 - Petition seeking approval for One
                          Time Settlement Scheme (OTS-2023) - Power point
                          presentation by KSEB Ltd.
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">10</td>
                         <td> OP 34/2023 </td>
                        <td>
                          {" "}
                          OP 34/2023 – Petition on Truing up of accounts for the
                          Financial Year 2021-22 - M/s KPUPL
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className="table-no-aling">11</td>
                         <td> </td>
                        <td>
                          {" "}
                          OP 33/2023 – Petition on Truing up of accounts for the
                          Financial Year 2021-22 - M/s TCED
                        </td>

                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </TabArchives>
            </TabsTabArchives>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
