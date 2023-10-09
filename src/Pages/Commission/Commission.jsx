import React from 'react'
import './Commission.css'
import { Col, Container, Row } from 'react-bootstrap'
import CommissionCard from './CommissionCards/CommissionCard'





export default function Commission() {






  return (
    <div>
      <Container>
        <Row className='mt-4'>
          <Col md={6}>
          <h2>
             The Commission
            </h2>


            <p className='about-pag-cont'>
              The Kerala State Electricity Regulatory Commission was constituted
              under the provisions of Subsection (1) of Section 17 of the Electricity
              Regulatory Commissions Act, 1998.  With effect from 10th June, 2003, the
              Commission has come under the purview of the Electricity Act, 2003, as the
              Electricity
              Regulatory Commissions Act, 1998 has since been repealed.
              <br/>
              The Headquarters of the Commission is at Thiruvananthapuram.
            </p>
            
          </Col>
          <Col md={6}>
          <img className='About-page-img' src={require('../../img/Gallery/office2.jpeg')} />
           
          </Col>
        </Row>

      <div className='member-section'>
      <h2>Members</h2>
        <p className='commission-members-heading'>The Commission consists of the following Members:</p>
      </div>
        
      </Container>

      <CommissionCard />

      <Container>
        <Row className='mt-5'>
          <Col md={12}>

              <h2>Functions </h2>
               <div className='commission-function-text'>
            <ul>
              <li>
                Determine the tariff for generation, supply, transmission and wheeling of electricity, wholesale, bulk or retail, as the case may be, within the State
              </li>
              <li>regulate electricity purchase and procurement process of distribution licensees including the price at which electricity shall be procured from the generating companies or licensees or from other sources through agreements
                for purchase of power for distribution and supply within the State</li>
              <li>facilitate intra-State transmission and wheeling of electricity</li>
              <li>issue licenses to persons seeking to act as transmission licensees, distribution licensees and electricity traders with respect to their operations within the State</li>
              <li>promote cogeneration and generation of electricity from renewable sources of energy by providing suitable measures for connectivity with the grid and sale of electricity to any person, and also specify, for purchase of electricity from such sources, a percentage of the total consumption of electricity in the area of a distribution licensee</li>
              <li>adjudicate upon the disputes between the licensees and generating companies and to refer any dispute for arbitration</li>
              <li> levy fee for the purposes of the Electricity Act, 2003</li>
              <li>specify State Grid Code</li>
              <li>specify or enforce standards with respect to quality, continuity and reliability of service by licensees</li>
              <li>fix the trading margin in the intra-State trading of electricity, if considered, necessary</li>
              <li>discharge such other functions as may be assigned to it under the Electricity Act, 2003</li>
              <li>advise the State Government on all or any of the following matters, namely:</li>
              <li>promotion of competition, efficiency and economy in activities of the electricity industry</li>
               <li>promotion of investment in electricity industry</li>
               <li> reorganization and restructuring of electricity industry in the State</li>
               <li>matters concerning generation, transmission, distribution and trading of electricity or any other matter referred to the State Commission by that Government</li>

            </ul>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  )
}
