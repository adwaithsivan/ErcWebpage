import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './righttoinformation.css'
import TabRight from 'react-bootstrap/Tab';
import TabsRight from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';


export default function RightToInformation() {
    return (
        <div >
            <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                    <div className="organisation-img">
            <h1 className='organisation-head'>Right to Information</h1>
            </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='wrapper' id="rti-wrapper">
                    <Col md={12}>
                        <TabsRight
                            defaultActiveKey="profile"
                            // id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <TabRight eventKey="home" title="SPIO">
                                <h5 className='spio-note-text'>Details of PIO, APIOs and Appellate Authority as per Right to Information Act, 2005</h5>
                                <Table striped bordered hover className='mt-3'>

                                    <thead>
                                        <tr>
                                            <th>Authority</th>
                                            <th>Name of Officer</th>
                                            <th>Designation</th>
                                            <th>Complete Office Address</th>
                                            <th>Office Telephone No</th>
                                            <th>Email Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Assistant Public Information Officer
                                                (APIO)</td>
                                            <td>Smt. Sreedevi.P.G</td>
                                            <td>Confidential Asst.</td>
                                            <td>@KPFC Bhavanam,
                                                CV Raman Pillai Road,
                                                Vellayambalam,
                                                Thiruvananthapuram PIN -695 010</td>

                                            <td>0471 - 273 5544</td>
                                            <td><a>kserc@erckerala.org</a></td>
                                        </tr>
                                        <tr>
                                            <td>Public Information
                                                Officer (PIO)</td>
                                            <td>Shri. S. Muraleedharan</td>
                                            <td>Consultant (Administration)	</td>
                                            <td>--do--</td>
                                            <td>0471 - 273 5544</td>
                                            <td>kserc@erckerala.org</td>
                                        </tr>

                                    </tbody>
                                </Table>

                                <p className='spio-note-text'>Note:   Application fee may be submitted by Cash / DD / Banker's Cheque / Indian Postal Order of Rs. 10/- in favour of the Secretary  payable at Thiruvananthapuram.</p>
                           <Container className="bank-details">
                            <div className="bank-info">
                                <p>Right to information Act 2005 <br/> The details of bank accounts for remittance of fee.</p>
                              
                            </div>
                            <div className="bank-table">
                            <Row className='mt-2'>

<Col md={6}>
  <Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>Name Of Bank</th>
        <th>State Bank of India</th>
      </tr>
      <tr>
        <th>Branch Name</th>
        <th>Althara Branch</th>
      </tr>
      <tr>
        <th>Name Of Bank</th>
        <th>State Bank of India</th>
      </tr>
      <tr>
        <th>IFSC</th>
        <th>SBIN0007203</th>
      </tr>
      <tr>
        <th>Account Number</th>
        <th>67239092223</th>
      </tr>
      <tr>
        <th>Account Name</th>
        <th>Secretary, KSERC (Kerala State Electricity Regulatory Commission)</th>
      </tr>
    </thead>
    
  </Table>
</Col>
</Row>
                            </div>
                           </Container>
                            </TabRight>
                            <TabRight eventKey="profile" title="Appellate Authority">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Authority</th>
                                            <th>Name of Officer</th>
                                            <th>Designation</th>
                                            <th>Complete Office Address</th>
                                            <th>Office Telephone No</th>
                                            <th>Email Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Appellate Authority (RTI Act)</td>
                                            <td>Shri. C.R. Satheeshchandran</td>
                                            <td>Secretary </td>
                                            <td>KPFC Bhavanam,
                                                CV Raman Pillai Road,
                                                Vellayambalam,
                                                Thiruvananthapuram PIN -695 010</td>

                                            <td>0471 - 273 5588</td>
                                            <td><a>kserc@erckerarla.org</a></td>
                                        </tr>
                                        <tr>
                                            <td>Appellate Authority (Administration)</td>
                                            <td>Shri;. P. Suresh Kumar</td>
                                            <td>Staff Consultant (Legal)</td>
                                            <td>--do--</td>
                                            <td>- do -</td>
                                            <td>- do -</td>
                                            
                                        </tr>

                                    </tbody>
                                </Table>
                            </TabRight>
                            <TabRight eventKey="longer-tab" title="Mandatory Disclosure">
                            <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td>Daily order - RP-1/2017 - Open Access for embedded open access consumers - HT&EHT Association</td>                  
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td> 
                      </tr>                    
                    </tbody>
                  </Table>
                            </TabRight>
                        
                        </TabsRight>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
