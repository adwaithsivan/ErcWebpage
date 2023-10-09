import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TabArchives from 'react-bootstrap/Tab';
import TabsTabArchives from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import './regulationspage.css'
import sampleFile from '../../pdf/draft final - Copy.pdf'

export default function Regulationspage() {
  return (
    <div>

      <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>Regulations</h1>
            </div>
          </Col>
        </Row>
      </Container>


      <div className='Regulations'>
        <Row className='mt-4'>
          <Col md={12} >




            <TabsTabArchives
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3">
            
              <TabArchives eventKey="home" title="  Draft Regulations">
                <div className='archive-scroll' >

                  {/* --------------start search-bar------------------- */}
<div className='draft-regulation-search-area'>
        <Row className='reg-row' id='regulation-row'>
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
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn-reg'>Search</button>
   </Col>
      </Row>
</div>
{/* ------------------end of sear-bar---------------- */}

                  <Table striped bordered hover variant="light" id='draft-regulation-table'>
                    <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                          Draft Kerala State Electricity Regulatory Commission (Consumer Grievance Redressal Forum and Electricity Ombudsman) Regulations, 2023</td>
                        <td>2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>2</td>
                        <td>
                        Draft -KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023</td>
                        <td>2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>3</td>
                        <td>
                        Addendum to Draft- KSERC(Renewable Energy and Net Metering) (First Amendment) Regulations, 2022</td>
                        <td>2022</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>4</td>
                        <td>
                        Draft - KSERC (Renewable Energy and Net Metering ) Regulations 2020, First Amendment</td>
                        <td>2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>5</td>
                        <td>
                        Draft - Kerala State Electricity Regulatory Commission (Conditions of License for Existing Distribution Licensees) (Amendment) Regulations, 2022</td>
                        <td>2022</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>6</td>
                        <td>
                        Draft - Kerala State Electricity Regulatory Commission (Salaries, Allowances and other Terms and Conditions of Service of Chairperson and Members) Amendment Rules, 2022</td>
                        <td>2022</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>7</td>
                        <td>
                        Draft- ''Kerala State Electricity Regulatory Commission (Conduct of Business) (Amendment) Regulations, 2021</td>
                        <td>2021</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>8</td>
                        <td>
                        Draft - ‘Kerala State Electricity Regulatory Commission (Terms and Conditions for Determination of Tariff) Regulations, 2021 (including Addendum dated 11.8.2021)</td>
                        <td>2021</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>9</td>
                        <td>
                        Draft - ‘Kerala State Electricity Regulatory Commission (Terms and Conditions for Determination of Tariff) Regulations, 2021</td>
                        <td>2021</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                    </thead>
                  </Table>
                </div>


{/* ---------------final-regulations-------------------
--------------------------------------------------- */}
              </TabArchives>
              <TabArchives eventKey="Draft Regulations" title="Final Regulations">

     <div className='dropdown-wrapper'>
     <Row>
        <Form.Label column lg={2} id='regulation-label'>
         <h6>Regulation Type</h6>
        </Form.Label>
        <Form.Group as={Col} controlId="formGridState" >
        <Form.Select defaultValue="Choose..." id='dropdown-area'>
            <option>Choose...</option>
            <option>All Regulations</option>
            <option>Tariff Regulations</option>
            <option>Conduct of Business Regulations</option>
            <option>CGRF and Ombudsman Regulations</option>
            <option>Licensing Regulations</option>
            <option>Renewable Energy Regulations</option>
            <option>Distribution Licensee Regulations</option>
            <option>Generating companies’ Regulations</option>
            <option>Connectivity and Open Access Regulations</option>
            <option>Electricity Supply Code and Amendments</option>
            <option>Electricity Grid Code and Amendments</option>
            <option>Compliance and Audit Regulations</option>
            <option>Administrative Regulations</option>
            <option>Miscellaneous Regulations</option>

          </Form.Select>
        </Form.Group>
      </Row>

      <Row id='regulation-year'>
        <Form.Label column lg={2} id='regulation-label'>
        <h6>Year</h6>
        </Form.Label>
        <Form.Group as={Col} controlId="formGridState" >
        <Form.Select defaultValue="Choose..." id='dropdown-year'>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <button type="button" class="btn btn-outline-primary" id='search-btn-finalreg'>Submit</button>
     </div>

     <div className='final-reg-table' >
                 <h3 id='table-heading-final-regulations'>Tariff Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>2</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2020</td>
                        <td>2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>3</td>
                        <td>
                        Kerala State Electricity Regulatory Commission (Conduct of Business) Third Amendment Regulations, 2014</td>
                        <td>2014</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>4</td>
                        <td>
                        Kerala Electricity Supply (Amendment) Code, 2020</td>
                        <td>2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>5</td>
                        <td>
                        Kerala State Electricity Regulatory Commission (Conduct of Business) Third Amendment Regulations, 2014</td>
                        <td>2014</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>6</td>
                        <td>
                        Kerala Electricity Supply (Amendment) Code, 2016</td>
                        <td>2016</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
                <h3 id='table-heading-final-regulations'>Conduct of Business Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>
                      
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>2</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2020</td>
                        <td>2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>3</td>
                        <td>
                        Kerala State Electricity Regulatory Commission (Conduct of Business) Third Amendment Regulations, 2014</td>
                        <td>2014</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                    </thead>
                  </Table>

                  <h3 id='table-heading-final-regulations'>CGRF and Ombudsman Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>
                      
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                      
                      <tr>
                        <td className='table-no-aling'>2</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2020</td>
                        <td>2020</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>

                      <tr>
                        <td className='table-no-aling'>3</td>
                        <td>
                        Kerala State Electricity Regulatory Commission (Conduct of Business) Third Amendment Regulations, 2014</td>
                        <td>2014</td>
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>
                    </thead>
                  </Table>

                   <h3 id='table-heading-final-regulations'>Licensing Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                  <h3 id='table-heading-final-regulations'>Renewable Energy Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                  <h3 id='table-heading-final-regulations'>Distribution Licensee Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Generating companies’ Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Connectivity and Open Access Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>

                    <h3 id='table-heading-final-regulations'> Electricity Supply Code and Amendments</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Electricity Grid Code and Amendments</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Compliance and Audit Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Administrative Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                    <h3 id='table-heading-final-regulations'>Miscellaneous Regulations</h3>
                  <Table striped bordered hover variant="light">
                  <thead>
                      <tr>
                        <th className='table-no-aling'>SI.No. </th>   
                        <th>Description</th>
                        <th>Year</th>
                        <th>English</th>
                         <th>Malayalam</th>
                        <th>Gazatte</th>
                      </tr>
                      <tr>
                        <td className='table-no-aling'>1</td>
                        <td>
                        KSERC (Terms and Conditions for Determination of Tariff) (First Amendment) Regulations, 2023 (Gazette format)</td>
                        <td>2023</td>                     
                        <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                      </tr>                     
                   </thead>
                  </Table>
                 

              </TabArchives>
            </TabsTabArchives>
          </Col>
        </Row>
      </div>
    </div>
  )
}
