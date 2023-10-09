import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TabArchives from 'react-bootstrap/Tab';
import TabsTabArchives from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './orderpage.css'
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';

export default function Orderpage() {
  return (
    <div>
         <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>Orders</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
         <Container>
        <Row className='wrapper'>
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
      <div className='order-wrapper'>
        <Row className='mt-4'>
          <Col md={12} >
            {/* <img className='Archives-img' src={require('../../img/organisation-baner.jpg')} /> */}
            <TabsTabArchives
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <TabArchives eventKey="home" title=" All Orders">
                <div >
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td>RP-1/2017</td>
                        <td>Daily order - RP-1/2017 - Open Access for embedded open access consumers - HT&EHT Association</td>
                        <td>	26-05-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        <td>OP 1/2017</td>
                        <td>OP 1/2017 - Daily order -Adjudication of dispute between Lanco Kondapalli Power Limited and KSEB Ltd</td>
                        <td>27-03-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>

                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td>OP No.4/15</td>
                        <td> OP No.4/15 Daily order on approval of estimates for ABC and misc. charges for KSEBL</td>
                        <td>	04-05-2015</td>
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
              <TabArchives eventKey="Daily Orders" title="Daily Orders">

                <div className='archive-scroll'>
                  <Table striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th className='table-no-aling'>Sr.No.</th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                      <tr>
                        <th className='table-no-aling'>1</th>
                        <td>OP No. 7/2016</td>
                        <td>
                          OP No. 7/2016-Non-compliance - CEA Safety Regulations, 2010, relating to the qualifications of technical staff- Shri. Shibu K S</td>
                        <th>29-12-2017</th>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        <td>OP 7/2017 Order</td>
                        <td>OP 7/2017 Order on 150 kVA, contract demand at 415 voltage at low voltage supply surcharge - M/s National Plywood Industries</td>
                        <td>	23-08-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td>OP 33/12 and OP 19/15</td>
                        <td>OP 33/12 and OP 19/15 - Common Order on approval of draft PPA to be executed between KDHPCL and KSEB Ltd</td>
                        <td>30-07-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>

                      <tr>
                        <td className='table-no-aling' >4</td>
                        <td>RP No.1/2017</td>
                        <td>  RP No.1/2017 - Review petition by HT & EHT Association in the order dt.17.4.17 on determination of open access charges</td>
                        <td>	26-07-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling' >5</td>
                        <td>RP No.4/2017</td>
                        <td>RP No.4/2017- Review Petition filed by M/s Kochi Metro Rail Ltd on tariff dated 17-04-2017</td>
                        <td>	12-07-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >6</td>
                        <td></td>
                        <td> Order on File No.665/DD(T)/KSIE/17 -Kerala State Industrial Enterprises and Amal Jyothi College of Engg. -on Roof Top Solar PV Power</td>
                        <td>		03-07-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>

                      <tr>
                        <td className='table-no-aling' >7</td>
                        <td></td>
                        <td>  Order on File No.186/DD (T)/Corridor/17 - approval of additional cost for transmission corridor on e-bid basis- KSEB Ltd</td>
                        <td>		30-06-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >8</td>
                        <td></td>
                        <td>   OP No.2/2017 - dispute with KSEB Ltd and M/s INDSIL Hydro Power for non-payment of banked energy</td>
                        <td>			02-06-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >9</td>
                        <td></td>
                        <td>   573/F&T/17/KSERC - Application for amending tariff - Mata Amrithanandamayi Math, Kollam</td>
                        <td>			02-06-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >10</td>
                        <td></td>
                        <td>    Order (file No.720/DD(T)/RPIL/2017) - Approval of PPA for additional power by Rubber Park India (P) Ltd</td>
                        <td>			31-05-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>


                      <tr>
                        <td className='table-no-aling' >11</td>
                        <td></td>
                        <td>  Order on File No. 590/DD(T)/BKPL-naphtha /2017/KSERC - BKPL- implementing the interim order of the Hon’ble High Court of Kerala</td>
                        <td>		27-04-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >12</td>
                        <td></td>
                        <td>   Interim Order on Petition No. 03 / 2017 - CIAL seeking refund of the registration fee paid etc - KSEB Ltd</td>
                        <td>	27-04-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>



                      <tr>
                        <td className='table-no-aling' >13</td>
                        <td></td>
                        <td>   Order No. 143/F&T/2017/KSERC- purchase of power RGCCPP, Kayamkulam of NTPC</td>
                        <td>	27-04-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>



                      <tr>
                        <td className='table-no-aling' >14</td>
                        <td></td>
                        <td> CP 8/2016 & 9/2016 - Common order on - Atlas Gold Township India Pvt Ltd</td>
                        <td>	26-04-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>

                      <tr>
                        <td className='table-no-aling' >15</td>
                        <td></td>
                        <td> OA 1/2017 - Categorisation of the activity of sterilization under LT IV (A) Industrial - M/s Microtol Sterilisation Service (P) Ltd</td>
                        <td>	11-04-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >16</td>
                        <td></td>
                        <td> 1834/DD (T)/2016/KSERC – Order on re-categorization of ‘Call Centers’ under LT-IV (B) IT/ITES category - Technopark</td>
                        <td>		22-03-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>


                      <tr>
                        <td className='table-no-aling' >17</td>
                        <td></td>
                        <td> OP 13/2016 – Order on revision of cross subsidy surcharge & additional surcharge for open access - KSEB Ltd</td>
                        <td>	14-03-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>

                      <tr>
                        <td className='table-no-aling' >18</td>
                        <td></td>
                        <td>File No.1580/F&T/2016 - 22/2/2017 Order on Capital Investment Plan for the 2017-18 - Rubber Park India (P) Ltd</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >19</td>
                        <td></td>
                        <td> O.P. No.10/2016- Order on- Approval of PPA wind farm of M/s Ahalia Alternate Energy (P) Ltd at Palakkad</td>
                        <td>		22-02-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>



                      <tr>
                        <td className='table-no-aling' >20</td>
                        <td></td>
                        <td>CP No. 5/16 - Suja.K, Palakkad- Non-compliance of Supply Code and Act by KSEB Ltd</td>
                        <td>16-02-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>



                      <tr>
                        <td className='table-no-aling' >21</td>
                        <td></td>
                        <td>File No. 126/D(F&T) / 2016/KSERC – M/s REI Power Bazar (Pvt) Limited –Intra-state power exchange in Kerala</td>
                        <td>14-02-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >22</td>
                        <td></td>
                        <td>  File No.1184/ADL/16/KSERC- LANCO Kondopalli Power Ltd - Maintability of the Petition under EA 2003</td>
                        <td>		07-02-2017</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>

                      <tr>
                        <td className='table-no-aling' >23</td>
                        <td></td>
                        <td>  Petition No. 1893/DD (T)/Jhabua/2016/KSERC in OP No. 13/2015 - Procurement of 865 MW power for long term by KSEB Ltd. on DBFOO basis</td>
                        <td>		22-12-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >24</td>
                        <td></td>
                        <td>  Common Order - Petition Nos.1232/DD(T)/OA-NoC/16- (HT&EHT)& 1270/F&T/16/KSERC- (INDSIL) Interstate short term open access</td>
                        <td>		21-12-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >25</td>
                        <td></td>
                        <td>  OP 11/2016 – Order on implementation of Unnat Jyothi by Affordable LED’s for All (UJALA) and EEF Programme by TCED</td>
                        <td>	21-12-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >26</td>
                        <td></td>
                        <td>  O.P. 14 of 2016 Order on approval of Supplementary Power Purchase Agreement KDHPCL and KSEB Ltd</td>
                        <td>		20-12-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >27</td>
                        <td></td>
                        <td>    Order – File No.1964/DD(T)/PP200 MW/2016/KSERC Approval for the purchase of 100MW RTC power and 100 MW on short term basis –KSEB Ltd</td>
                        <td>			19-12-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >28</td>
                        <td></td>
                        <td>   C.P.No.07/2016 (1488/Com.Ex/2016/KSERC) - Order on non-compliance of Supply Code, 2014 - Sri. Varkey Thomas</td>
                        <td>		24-11-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >29</td>
                        <td></td>
                        <td>  C.P.No.06/2016 (1487/Com.Ex/2016/KSERC) - Order on non-compliance of Supply Code, 2014 - Smt. Mariamma</td>
                        <td>	24-11-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                      </tr>


                      <tr>
                        <td className='table-no-aling' >30</td>
                        <td> </td>
                        <td>  CP.No.04/2016 - KAP (India) Project & Construction Pvt Ltd - non-compliance of the order of Ombudsman - P/371/2013</td>
                        <td>	17-11-2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>

                      </tr>


                      <tr>
                        <td className='table-no-aling' >31</td>
                        <td></td>
                        <td>  C.P.No.10/2016 – Order -M/s. Hot Spices & Builders Pvt. Ltd -Non-compliance of the directive, and Supply Code, 2014</td>
                        <td>		16-11-2016</td>
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

              

              <TabArchives eventKey="Tariff Orders" title="Tariff Orders">
              <div >
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td></td>
                        <td>Schedule of Tariff and Terms and Conditions for Retail Supply of Electricity by KSEB Ltd. and all other Licensees in the State of Kerala wef 01.08.2023 to 30.09.2023</td>
                        <td>31-07-2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        <td></td>
                        <td>File No.0297/D(T)/2022/KSERC - Schedule of Tariff and Terms and Conditions for Retail Supply of Electricity by KSEB Ltd and all other Licensees in the State of Kerala with effect from 01.07.2023.</td>
                        <td>	30-06-2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>

                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td></td>
                        <td> File No.0297/D(T)/2022/KSERC - Schedule of Tariff and Terms and Conditions for Retail Supply of Electricity by KSEB Ltd and all other Licensees in the State of Kerala with effect from 01.04.2023.</td>
                        <td>	23-03-2023</td>
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

              <TabArchives eventKey="ARR Orders" title=" ARR Orders">
              <div >
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td> OP 11/2022</td>
                        <td> OP 11/2022 - Orders in the petition filed by KSEB Ltd for the approval of ARR, ERC and tariff proposals for the control period 2022-23 to 2026-27</td>
                        <td>	25-06-2022</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        <td>RP No.1/2020</td>
                        <td> RP No.1/2020 - Review Petition against the Order dated 8-11-2019 in OA 10/2019 on the ARR&ERC for the period 2018-19 to 2021-22 - of M/s Rubber Park India (P) Limited</td>
                        <td>	24-04-2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>

                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td>OA 25/2020</td>
                        <td>OA 25/2020 - Order on ARR and ERC for the control period 2018-19 to 2021-2022 M/s Technopark</td>
                        <td>24-03-2020</td>
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

              <TabArchives eventKey="Truing up Orders" title="Truing up Orders">
              <div >
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td> OP 28/2023</td>
                        <td>  OP 28/2023 - Order on Truing Up of Accounts for the Financial Year 2021-22.- M/s Rubber Park India Private Limited (RPIL)</td>
                        <td>	01-09-2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        OP 34/2023
                        <td></td>
                        <td></td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>

                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td>OP 81/2022</td>
                        <td> OP 81/2022 - Order on Truing up of Accounts for the financial year 2020-21 - M/s Technopark, Trivandrum</td>
                        <td>27-07-2023</td>
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

              <TabArchives eventKey=" General Orders" title=" General Orders">
               
              <div >
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th className='table-no-aling'>Sr.No. </th>
                        <th>Order No.</th>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Download</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='table-no-aling' >1</td>
                        <td></td>
                        <td>OP 40/2023 - Order on seeking formulation of appropriate Deviation Settlement Mechanism to handle the deviation during scheduling of surplus quantum of power generated from the Cogeneration Power Plant of the Petitioner to third parties by way of Open Access. - Phillips Carbon Black Limited (PCBL Ltd)</td>
                        <td>	22-08-2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>
                      <tr>
                        <td className='table-no-aling' >2</td>
                        <td></td>
                        <td> OP 43/2023 - Order on seeking exemption from the installation of Special Energy Meters and SCADA connectivity at injection and drawal point. - M/s Greenland Paper Mills Ltd</td>
                        <td>	21-08-2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">view</a>
                        </div>
                      </td>
                       

                      </tr>

                      <tr>
                        <td className='table-no-aling' >3</td>
                        <td></td>
                        <td> OP 50/2023 - Order on approval for to allow power drawal from the unapproved PPA GENCOs at PPA rate till finalization of medium term power procurement and commencing the supply of power through the identified GENCO considering the severe financial crisis faced by KSEBL due to power shortage in the State caused by weak monsoon - KSEB Ltd.</td>
                        <td>	21-08-2023</td>
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
     </div>
    </div>
  )
}
