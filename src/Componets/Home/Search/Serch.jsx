import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import  './search.css'
import Marqueean from "react-fast-marquee";
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Serch() {
  return (
    <div className='serach'>
        <Container id='search'>
            <Row>
                <Col md={6}>
                    <div className='Announcements'>
                         <div className='Announcements-icon'>
                         <img className='Announcements-icon-img' src={require('../../../img/Announcements-icon.png')} />
                             
                         </div>
                         <div>
                          <p className='Announcements-text'> <Marqueean >OP No. 35/2023 - Petition seeking approval for One Time Settlement Scheme</Marqueean>   </p>
                         </div>

      
                        </div> 
                </Col>

                <Col md={6} className='form-aling' id="search-area">
            <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search" >
          <Form.Control type="email" placeholder="name@example.com" id='home-search-bar' />
        </FloatingLabelSerch>

        <button id='search-btn' type="button" class="btn btn-outline-primary">Search</button>
        </Col>
                
            </Row>
        </Container>
    </div>
  )
}
