import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

export default function ScheduleOfHearing() {
  return (
    <div>
      <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>Schedule of Hearing</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='wrapper'>

          <Col md={12} className='mt-2'>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Title</th>
                  <th>Date</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Schedule of Hearing</td>
                  <td>July 2023</td>
                </tr>

              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
