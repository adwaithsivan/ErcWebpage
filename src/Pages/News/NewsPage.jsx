import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './news.css'

export default function NewsPage() {
  return (
    <div>
<Container>
  <Row className='mb-3'id="news-heading">
    <h2>News Heading</h2>
    <Col md={12}>
    <img className='news-image' src={require("../../../src/img/news-img-1.jpg")} />
    </Col>
  </Row>
  <div className='news-desc'>
  <p className="news-page-content">
      Public hearing on approval cost data 2023 of Distribution works. Petitioner : KSEB Ltd.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
      </p>
      <p className="news-page-content">
      Public hearing on approval cost data 2023 of Distribution works. Petitioner : KSEB Ltd.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
      </p>
  </div>

</Container>
    </div>
  )
}
