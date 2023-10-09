import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./whatsnew.css";


export default function WhatsNew() {
  return (
    <div className="whats-new">
      
      <div className="bg-image">
      
        <img src={require("../../../img/solar-panel.webp")} className="solar-panel"/>
      </div>
      <div className="inner">
        <div className="whats-new-wrapper">
        
            <Row className="whats-new-row" id='whats-new-row'>
            <Col md={6}  >
            <div className='news'>
              <h3 className='news-text-whats'>What's New</h3>
            </div>
            <div className='whats-now-box'>
              <ul className="">
                <li className='whats-new-text-1' id="first">
                 <a href="#"> Standards for Performance of Distribution Licensees
                  for the Financial Year 2022-23</a>
                </li >

                <li className='whats-new-text-2'>
                  <a href="#">File No.0297/D(T)/2022/KSERC - Schedule of Tariff and Terms and Conditions for
                  Retail Supply of Electricity by KSEB Ltd and all other Licensees in
                  the State of Kerala with effect from 01.07.2023</a>
                </li >

                <li className='whats-new-text-1'>
                 <a href="#"> Meeting Report: Tie-up between Electricity Sector and Engineering
                  Colleges Date: 22/06/2023</a>
                </li >

                <li className='whats-new-text-2'>
                <a href="#">OP No. 35/2023 - Petition seeking approval for One Time Settlement Scheme (OTS-2023) -
                  Power point presentation by KSEB Ltd.</a>
                </li >

                <li className='whats-new-text-1'>
                  <a href="#">KSERC (Terms and Conditions for Determination of Tariff) (First Amendment)
                  Regulations, 2023</a>
                </li >

                <li className='whats-new-text-2'>
                  <a href="#">Notification - Applications are invited for the Consumer Grievances Redressal
                  Forum (CGRF) Members under various licensees
                  (last date 14.06.2023)</a>
                </li >

                <li className='whats-new-text-1'>
                  <a href="#">Draft -KSERC (Terms and Conditions for Determination of Tariff)
                  (First Amendment) Regulations, 2023</a>
                </li >
                
                <li className='whats-new-text-2'>
                  <a href="#">Notification - Applications are invited for the Consumer Grievances Redressal
                  Forum (CGRF) Members under various licensees
                  (last date 14.06.2023)</a>
                </li >

                <li className='whats-new-text-1'>
                  <a href="#">Draft -KSERC (Terms and Conditions for Determination of Tariff)
                  (First Amendment) Regulations, 2023</a>
                </li >
              </ul>

            </div>
          </Col>
  
          <Col md={6}  >
     
            <div className='news' id="news2">
              <h3 className='news-text-whats'>All Orders</h3>
            </div>
            <div className='whats-now-box'>
              <ul className="">
                <li className='whats-new-text-1' id="first">
                 <a href="#">Daily order - RP-1/2017 - Open Access for embedded open access consumers - HT&EHT Association</a>
                </li >

                <li className='whats-new-text-2'>
                  <a href="#">OP 1/2017 - Daily order -Adjudication of dispute between Lanco Kondapalli Power Limited and KSEB Ltd</a>
                </li >

                <li className='whats-new-text-1'>
                 <a href="#"></a>
                </li >

                <li className='whats-new-text-1'>
                <a href="#">OP No.4/15 Daily order on approval of estimates for ABC and misc. charges for KSEBL</a>
                </li >

              </ul>

            </div>
          </Col>
           
  
          </Row>
        </div>
      </div>
    </div>
  );
}
