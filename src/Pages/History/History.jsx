import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import './history.css'

export default function History() {
  return (
    <div>
          <Container fluid className="right-to-information">
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className="organisation-head">History</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="history">
        <h2>Chairman</h2>
      <Col md={2}>
            <div class="row-history">
                <div class="card-body">
                  <div class="card-history">
                    <div class="row-card-body">
                      <img class="card-img"
                        src={require("../../img/profile.jpg")}
                        alt="sans"
                      />
                      <div class="card-text">
                        <h5 class="card-title">Name</h5>
                        <p className="tenure">Tenure</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="card-history">
                    <div class="row-card-body">
                      <img class="card-img"
                        src={require("../../img/profile.jpg")}
                        alt="sans"
                      />
                      <div class="card-text">
                        <h5 class="card-title">Name</h5>
                        <p className="tenure">Tenure</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
      </Container>
    </div>
  )
}

