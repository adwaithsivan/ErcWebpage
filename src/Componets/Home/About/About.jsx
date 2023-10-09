import React from "react";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function About() {
  return (
    <div className="about-body">
      <div>
      
        <div className="about-main-container">
       
          <Row className="content" id="content">
          <h3>About</h3>
            <Col md={6} lg={6} id="about-container">
           
              <img id="image" src={require("../../../img/ab-bane.jpg")} />

              <p className="mt-4 ab-text">
                The Kerala State Electricity Regulatory Commission was
                constituted under the provisions of Subsection (1) of Section 17
                of the Electricity Regulatory Commissions Act, 1998. With effect
                from 10th June, 2003, the Commission has come under the purview
                of the Electricity Act, 2003, as the Electricity Regulatory
                Commissions Act, 1998 has since been repealed.
              </p>
              <a href="/commission">
              <button type="button" class="btn btn-outline-primary btn-sm " id="abt-btn">
                Read More
              </button>
              </a>
            </Col>
            <Col md={2} id='members'>
            <div class="row" id="member-container">
                <div class="card-body" id="chairman">
                  <div class="card">
                    <div class="row-card-body">
                      <img class="card-img"
                        src={require("../../../img/jose sir.jpg")}
                        alt="sans"
                      />
                      <div class="card-text">
                        <h5 class="card-title">T.K.Jose IAS(Rtd)</h5>
                        <p className="chairman">Chairman</p>
                        <a href="/commission"><button
                          type="button"
                          class="btn btn-outline-primary btn-sm"
                        >
                          View Details
                        </button></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
            <Col  id="staff-profiles">
              <Card id="card-aling-members">
                <img
                  className="card-img-members"
                  src={require("../../../img/member wilson.jpg")}
                />
                <Card.Body id="card-body-members">
                <div class="card-text">
                        <h5 className="member-names">Adv A.J Wilson</h5>
                        <p className="card-descignation">Member(Law)</p>
                       
                        <a href="/commission">
                  <button type="button"
                  id="member-profile-btn"
                          class="btn btn-outline-primary btn-sm">
                          View Details
                        </button>
                        </a>
                        </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col  id="staff-profiles">
              <Card id="card-aling-members-tech">
                <img
                  className="card-img-members"
                  src={require("../../../img/member pradeep.jpg")}
                />
                <Card.Body id="card-body-members">
                <div class="card-text">
                        <h5 className="member-names"> B.Pradeep</h5>
                        <p className="card-descignation">Member(Technical)</p>
                        <a href="/commission">
                  <button type="button"
                  id="member-profile-btn"
                          class="btn btn-outline-primary btn-sm">
                          View Details
                        </button>
                        </a>
                        </div>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </div>
      </div>
    </div>
  );
}
