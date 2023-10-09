import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './StateAdvisory.css'
import FloatingLabelSerch from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import TabArchives from 'react-bootstrap/Tab';
import TabsTabArchives from 'react-bootstrap/Tabs';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function StateAdvisory() {
  return (
    <div>

       <Container fluid className='StateAdvisory'>
        <Row>
          <Col md={12}>
          <div className="organisation-img">
            <h1 className='organisation-head'>State Advisory Committee</h1>
            </div>
          </Col>
        </Row>
       </Container>

        <Container>
  

          <Row className='wrapper' id="sac-wrapper">
            <Col md={12} className='mt-2'>
            <TabsTabArchives
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >

<TabArchives eventKey="home" title=" SAC">
                <div >
                <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Name/Title</th>
          <th>Address</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Chairman</td>
          <td>Kerala State Electricity Regulatory Commmission</td>
          <td>Ex officio Chairperson</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Member</td>  
          <td>Kerala State Electricity Regulatory Commmission</td>
          <td>Ex officio Member</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Member</td>
          <td>Kerala State Electricity Regulatory Commmission	</td>
          <td>	Ex officio Member</td>
        </tr>


        <tr>
          <td>4</td>
          <td>The Secretary</td>
          <td>	Power Department, GoK</td>
          <td>	Ex officio Member</td>
        </tr>

        
        <tr>
          <td>5</td>
          <td>The Secretary</td>
          <td>	Power Department, GoK</td>
          <td>	Ex officio Member</td>
        </tr>

        <tr>
          <td>6</td>
          <td>The Chairman and Managing Director</td>
          <td>Kerala State Electricity Board Limited</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>7</td>
          <td>The Director (Distribution & Generation-Electrical)</td>
          <td>	Kerala State Electricity Board Limited</td>
          <td>Member</td>
        </tr>
        
        <tr>
          <td>8</td>
          <td>The General Manager</td>
          <td>		N.T.P.C, Choolatheruvu, Kayamkulam 690506</td>
          <td>Member</td>
        </tr>
        
        <tr>
          <td>9</td>
          <td>Fr. Thomas Peelianickel</td>
          <td>Executive Director, Kuttanad Vikasana Samithy, Ramankari, Kuttanad, Alappuzha</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>10</td>
          <td>	The President</td>
          <td>Kerala State Small Industries Association, Veekay Towers, Beerankunju Road, Kochi-682 018.</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>11</td>
          <td>Sri. K. Asokan</td>
          <td>Chairman, Friends of Electricity Employees&Consumers, ''Madhavam'', Mayanad.P.O, (via) Medical College, Kozhikode 673 008.</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>12</td>
          <td>	The Chairman</td>
          <td>	Confederation of Real Estate Developers'' Association of India (CREDAI) C/o SI PROPERTY (Kerala) Private Limited, ''Silver Oaks'', Near Golf Club, Thiruvananthapuram -695003.</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>13</td>
          <td>	The Director</td>
          <td>Energy Management Centre, Sreekrishna Nagar, Sreekaryam.P.O, Trivandrum - 695 017.</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>14</td>
          <td>	Shri. K.P. Babu</td>
          <td>Mattapoyil, Vavad.P.O, Koduvally, Kozhikode -673 572</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>15</td>
          <td>The President</td>
          <td>The High Tension and Extra High Tension Industrial Electricity Consumers'' Association, Productivity House, Kalamassery, Ernakulam-683104</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>16</td>
          <td>	The President</td>
          <td>Chamber of Commerce, TTC Road, Jawahar Nagar, Kowdiar, Thiruvananthapuram 695 003.</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>17</td>
          <td>	Shri. R. Chandrachoodan Nair</td>
          <td>RG Bhavanam, Thekkevila.P.O, Kollam-16</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>18</td>
          <td>The Director</td>
          <td>ANERT, Thiruvananthapuram</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>19</td>
          <td>Sri. T.K.Bhaskara Panicker</td>
          <td>President, Federation of Residents Associaiton Thiruvanantahpuram (FRAT) Renfrew College, USRS-72, US Road, Vellayambalam, Tvm</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>20</td>
          <td>Sri. S. Balasubramanian</td>
          <td>Asst. Director (Projects), SmartCity (kochi) Infrastructure Pvt Ltd, Brahmapuram, Kochi</td>
          <td>Member</td>
        </tr>

        <tr>
          <td>21</td>
          <td>Shri. Ravi</td>
          <td>Chalakudypuzha Samrakshana Samithi, ''Chaithanya'', Moozhikkakadavu, Pariyaram, Chalakkudy</td>
          <td>Member</td>
        </tr>
      </tbody>
    </Table>
                </div>

              </TabArchives>

              <TabArchives eventKey=" General Orders" title=" SAC Minutes">
              <div className='sac-search-area'>
        <Row className='reg-row-sac' >
                   <Col md={3} id="year-tab-sac">
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
       <FloatingLabelSerch className='Search-aling' controlId="floatingInputGrid" label="Search" id="search-box">
     <Form.Control type="email" placeholder="name@example.com" />
   </FloatingLabelSerch>
   <button type="button" class="btn btn-outline-primary" id='search-btn-reg'>Search</button>
   </Col>
      </Row>
</div>
               
               <div className="minutes-tab">
                   <Table striped bordered hover variant="light">
                     <thead>
                       <tr>
                         <th className='table-no-aling'>Sr.No. </th>
                         <th>Description</th>
                         <th>Year</th>
                         <th>Action</th>
 
 
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className='table-no-aling' >1</td>
                         <td>State Advisory Committee</td>
                         <td>	2018</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                        
 
                       </tr>
                       <tr>
                         <td className='table-no-aling' >2</td>
                         <td>State Advisory Committee</td>
                         <td>2016</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                        
 
                       </tr>
 
                       <tr>
                         <td className='table-no-aling' >3</td>
                         <td> State Advisory Committee</td>
                         <td>2014</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >4</td>
                         <td> State Advisory Committee</td>
                         <td>2011</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >5</td>
                         <td> State Advisory Committee</td>
                         <td>2009</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >6</td>
                         <td> State Advisory Committee</td>
                         <td>2008</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >7</td>
                         <td> SAC Second Term Extension Order</td>
                         <td> </td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >8</td>
                         <td> Appoinment of Order SAC</td>
                         <td></td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >9</td>
                         <td>Amendment in SAC</td>
                         <td></td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >10</td>
                         <td> 1st Amendment in SAC order</td>
                         <td>2008</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >11</td>
                         <td>2nd Amendment in SAC order</td>
                         <td>2008</td>
                         <td>
                      <div className='ordrs-icon-aling'>
                        <a href="#">View</a>
                        </div>
                      </td>
                       </tr>

                       <tr>
                         <td className='table-no-aling' >12</td>
                         <td> 3rd Amendment in SAC order</td>
                         <td>2008</td>
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
            </Col>
          </Row>
        </Container>
      
    </div>
  )
}
