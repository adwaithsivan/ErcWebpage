import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import './dashboard.css'
export default function Dashboard() {
  return (
    <div>
        <Container fluid className='right-to-information' >
                <Row>
                    <Col md={12}>
                        <div className="organisation-img">
                            <h1 className='organisation-head'>Dashboard</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
              <div className='pulse' id='pulse'>
                <p className='blink-hard'> new</p>
                <p className='blink-hard'> new</p>
              </div>
              <div className='dashboard-query' id='dashboard-query'>

              <button id="dash-btn">No of Petitions <br/> as on 15/09/2023 <br/><p className="blink-text">100</p></button>
              <button id="dash-btn">Orders issued <br/> as on 15/09/2023 <br/><p className="blink-text">100</p></button>




                
                {/* <div className='left-query'>
                  <h6>No of Petitions as on Date <br/>100</h6>
                </div>
                <div className='right-query'>
                  <h6>Order issued as on Date <br/>100</h6>
                </div> */}
              </div>
            </Container>
            <Container className="dashboard-table">
        <Row className='mt-5'>

          <Col md={12} className='mt-2'>
            <Table striped bordered hover variant="light" className='dashboard'>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><a href='#'>Power trend of kerala</a></td>         
                </tr>
                <tr>
                  <td>2</td>
                  <td><a href='#'>Performance of petitions resolution</a></td>           
                </tr>
                
           </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
