import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import TabArchives from 'react-bootstrap/Tab';
import TabsTabArchives from 'react-bootstrap/Tabs';

import './reports.css'
export default function Reports() {
  return (
    <div>
           <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>Reports</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="report-tabs">
            <TabsTabArchives
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >

<TabArchives eventKey="home" title="Annual Report">
                <div >
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
      <td>ANNUAL REPORT 2021-2022</td>
      <td>2021-2022</td>
      <div className='ordrs-icon-aling'>
      <a href="#">View</a>
      </div>
     </tr>
     <tr>
      <td>2</td>
      <td>ANNUAL REPORT 2020-2021</td>
      <td>2020-2021</td>
      <div className='ordrs-icon-aling'>
      <a href="#">View</a>
      </div>
     </tr>
     <tr>
      <td>3</td>
      <td>Annual Report 2019-20</td>
      <td>2019-20</td>
      <div className='ordrs-icon-aling'>
      <a href="#">View</a>
      </div>
     </tr>
     <tr>
      <td>4</td>
      <td> Annual Report 2018-19</td>
      <td>2018-19</td>
      <div className='ordrs-icon-aling'>
      <a href="#">View</a>
      </div>
     </tr>
     <tr>
      <td>5</td>
      <td>Annual Report 2016-17</td>
      <td>2016-17</td>
      <div className='ordrs-icon-aling'>
      <a href="#">View</a>
      </div>
     </tr>
      </tbody>
    </Table>
                </div>

              </TabArchives>

              <TabArchives eventKey="admin-report" title="Administrative Report">
               
               <div >
                   <Table striped bordered hover variant="light">
                     <thead>
                       <tr>
                         <th className='table-no-aling'>Sr.No. </th>
                         <th>Title</th>
                         <th>Year</th>
                         <th>Download</th>
                       </tr>
                     </thead>
                     <tbody>
                     
                     </tbody>
                   </Table>
                 </div>
 
               </TabArchives>

               <TabArchives eventKey="financial-report" title="Financial Report">
               
               <div >
                   <Table striped bordered hover variant="light">
                     <thead>
                       <tr>
                         <th className='table-no-aling'>Sr.No. </th>
                         <th>Title</th>
                         <th>Year</th>
                         <th>Download</th>
                       </tr>
                     </thead>
                     <tbody>
                     
                     </tbody>
                   </Table>
                 </div>
 
               </TabArchives>

               <TabArchives eventKey="other-report" title="Other Report">
               
               <div >
                   <Table striped bordered hover variant="light">
                     <thead>
                       <tr>
                         <th className='table-no-aling'>Sr.No. </th>
                         <th>Title</th>
                         <th>Year</th>
                         <th>Download</th>
                       </tr>
                     </thead>
                     <tbody>
                     <tr>
                      <td>1</td>
                      <td>Discusson Paper on separation of Common Expenses, Regulatory ratebase of small licensees</td>
                      <td>
                      </td>
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
            </div>
    </div>
  )
}
