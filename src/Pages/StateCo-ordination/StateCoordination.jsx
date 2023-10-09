import React from "react";
import "./stateCo-ordination.css";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabelSerch from "react-bootstrap/FloatingLabel";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from "react-bootstrap/Form";
import TabArchives from "react-bootstrap/Tab";
import TabsTabArchives from "react-bootstrap/Tabs";
import Table from 'react-bootstrap/Table';

export default function StateCoordination() {
  return (
    <div>
      <Container fluid className="StateCoordination">
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className="organisation-head">State Co-ordination Forum</h1>
            </div>
          </Col>
        </Row>
      </Container>
     

      <Container>
        <TabsTabArchives
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="wrapper-scf"
        >
          <TabArchives eventKey="home" title=" SCF">
            <div>
              <Row className="mt-4">
                <Col md={12} className="StateCoordination-main">
                  <h5 className="StateCoordination-head">
                    GOVERNMENT OF KERALA <br />
                    Power (C) Department <br />
                    NOTIFICATION
                  </h5>

                  <p className="StateCoordination-sub-head">
                    G. 0.(Rt.) No. 136/2018/POWER. Dated, Thiruvananthapuram,
                    24th July 2018
                  </p>
                  <p className="StateCoordination-sub-text">
                    S. R. O. No. 544/2018.—In exercise of the powers conferred
                    by sub-section (4) of section 166 of the Electricity Act,
                    2003 (Central Act 36 of 2003) and in supersession of the
                    notifications issued under G.O. (Rt.) No. 313/2006/Power
                    dated 30th October, 2006 and published as SRO No. 780/2006
                    in the Kerala Gazette Extraordinary No. 1767 dated 4th
                    November, 2006 and G. O. (Rt.) No. 155/2011/PD dated
                    16-7-2011 and published as SRO No. 458/2011 in the Kerala
                    Gazette Extraordinary No. 1435 dated 26-7-2011, Government
                    of Kerala hereby reconstitute the Co-ordination Forum, with
                    the following members in their official capacity:
                  </p>

                  <ol>
                    <li>
                      Chairman, Kerala State Electricity Regulatory Commission.
                    </li>
                    <li>
                      Member, Kerala State Electricity Regulatory Commission
                      (2).
                    </li>
                    <li>
                      Chairman and MD, Kerala State Electricity Board Limited.
                    </li>
                    <li>
                      Director (Distribution and Generation Electrical), KSEBL.
                    </li>
                    <li>
                      Director (Transmission and System Operation), KSEBL. –
                    </li>
                    <li>Director (Generation-Civil), KSEBL.</li>
                    <li>Independent Director, KSEBL.</li>
                    <li>Secretary, Thrissur Corporation, Thrissur.</li>
                    <li>
                      The Finance Adviser and Chief Accounts Officer, Cochin
                      Port Trust, Cochin.
                    </li>
                    <li>
                      The Chief Executive Officer, Technopark, Trivandrum.
                    </li>
                    <li>
                      The Executive Director, M/s Kannan Devan Hills Plantations
                      Co. Pvt. Ltd., KDHP House, Munnar.
                    </li>
                    <li>
                      The Chief Executive Officer, KINESCO Power Utilities Ltd.,
                      Kakkanad, Kochi.
                    </li>
                    <li>
                      The Managing Director, Rubber Park India (P) Ltd.,
                      Valayanchirangara, Ernakulam.
                    </li>
                    <li>
                      Development Commissioner, Cochin Special Economic Zone
                      Authority (CSEZA), Kakkanad, Kochi.
                    </li>
                    <li>
                      Chief Executive Officer, Infopark, Kusumagiri P. O.,
                      Kakkanad, Kochi.
                    </li>
                    <li>
                      Chief Executive Officer, Smart City Kochi Infrastructure,
                      Bhrahmapuram P. O., Kochi.
                    </li>
                    <li>
                      Chief Executive Officer, Kerala State IT Infrastructure
                      Ltd. (KS1TIL), Technopark Campus, Thiruvananthapuram.
                    </li>
                    <li>Director, Energy Management Centre.</li>
                    <li>Director, ANERT.</li>
                    <li>Chief Electrical Inspector.</li>
                    <li>General Manager, NTPC Ltd., Kayamkulam.</li>
                    <li>
                      Chief Manager. Powergrid Corporation of India Ltd., 400KV
                      Sub Station, Pallippuram P. O., Thiruvananthapuram.
                    </li>
                  </ol>

                  <p>
                    The Chairman, Kerala State Electricity Regulatory Commission
                    shall be the Chairman of the Co-ordination Forum.
                    <br />
                    By order of the Governor,
                    <br />
                    Sanjay M. Kaul, Secretary.
                  </p>
                </Col>
              </Row>

              <Container>
                <Row className="mt-3">
                  <h5 className="Explanatory-text">Explanatory Note</h5>
                  <Col md={12}>
                    <p>
                      (This does not form part of the notification, but is
                      intended to indicate its general purport.) Sub-section (4)
                      of section 166 of the Electricity Act, 2003 (Central Act
                      36 of 2003) empowers the State Government to constitute a
                      Co-ordination Forum consisting of the Chairperson and
                      Members of the State Electricity Commission and
                      representatives of the generating companies, transmission
                      licensees and distribution licensees in the State, for
                      smooth and co-ordinated development of the power system in
                      the State. As per G. O. (Rt.) No. 313/2006/power dated
                      30th October, 2006 and published as SRO No. 780/2006 in
                      the Kerala Gazette Extraordinary No. 1767 dated 4th
                      November 1006 and as per G.O, (Rt.) No. 155/2011/PD dated
                      16-7-2011 and published as SRO No. 458/2011 in the Kerala
                      Gazette Extraordinary No. 1435 dated 26-7-2011, Government
                      of Kerala constituted a Co-ordination Forum for the
                      objectives specified in the Act. However for the sake of
                      firmness and continuity, it is convenient if members are
                      nominated by their official position and not by their
                      individual names. Hence Government have decided to
                      reconstitute the Co-ordination Forum. This notification is
                      intended to achieve the above object.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </TabArchives>
          <TabArchives eventKey=" General Orders" title=" SCF Minutes">
               <div className='scf-search-area'>
               <Row className='reg-row' id="scf-row">
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
            <Col md={6} className='form-aling' id='reg-form-align'>
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search" id="scf-search-tab">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn-reg'>Search</button>
   </Col>
      </Row>
               </div>
               <div className="scf-tabs" >
                   <Table striped bordered hover variant="light">
                     <thead>
                       <tr>
                         <th className='table-no-aling'>Sr.No. </th>
                         <th>Description</th>
                         <th>Year</th>
                         <th>Action</th>
 
 
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className='table-no-aling' >1</td>
                         <td>State Advisory Committee</td>
                         <td>	2018</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                        
 
                       </tr>
                       <tr>
                         <td className='table-no-aling' >2</td>
                         <td>State Advisory Committee</td>
                         <td>2016</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                        
 
                       </tr>
 
                       <tr>
                         <td className='table-no-aling' >3</td>
                         <td> State Advisory Committee</td>
                         <td>2014</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >4</td>
                         <td> State Advisory Committee</td>
                         <td>2011</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >5</td>
                         <td> State Advisory Committee</td>
                         <td>2009</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >6</td>
                         <td> State Advisory Committee</td>
                         <td>2008</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >7</td>
                         <td> SAC Second Term Extension Order</td>
                         <td> </td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >8</td>
                         <td> Appoinment of Order SAC</td>
                         <td></td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >9</td>
                         <td>Amendment in SAC</td>
                         <td></td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                    

 
                     </tbody>
                   </Table>
                 </div>
 
               </TabArchives>
        </TabsTabArchives>
      </Container>
    </div>
  );
}
