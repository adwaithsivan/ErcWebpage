import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Modal, ModalContent } from "./Modal";
import { Modal2, ModalContent2 } from "./Modal";
import { Modal3, ModalContent3 } from "./Modal";
import './innergallery.css'

export const ScfGallery2 = () => {

    const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  const [isOpen2, setIsopen2] = useState(false);
  const showModal2 = () => setIsopen2((prev2) => !prev2);

  const [isOpen3, setIsopen3] = useState(false);
  const showModal3 = () => setIsopen3((prev3) => !prev3);

  return (
    <div>
         <Container fluid className='right-to-information' >
        <Row>
          <Col md={12}>
            <div className="organisation-img">
              <h1 className='organisation-head'>State Co-ordination Forum</h1>
            </div>
          </Col>
        </Row  >
      </Container>

  <div className="gallery-wrap">
  <Row className='mt-3' id="gallery-row">
     
     
          <Col md={4}>
          <Modal onOpen={showModal}>
            <div className="hover02-column"> 
              <div>
               <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')} /></figure>
                <p>State Co-ordination Forum-1</p>
             </div>
           </div>
           </Modal>
           {isOpen && (
        <ModalContent onClose={() => setIsopen(false)}>
          <img className="open-img" src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')} alt="" />
        </ModalContent>
      )}
        </Col>
          
   
     
     <Col md={4}>
     <Modal2 onOpen2={showModal2}>
       <div className="hover02-column"> 
         <div>
          <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-2.jpeg')} /></figure>
           <p>State Co-ordination Forum-2</p>
        </div>
      </div>
      </Modal2>
      {isOpen2 && (
   <ModalContent2 onClose2={() => setIsopen2(false)}>
     <img src={require('../../../img/Gallery/State-Co-ordination-Forum-2.jpeg')} alt="" />
   </ModalContent2>
 )}
</Col>

<Col md={4}>
     <Modal3 onOpen3={showModal3}>
       <div className="hover02-column"> 
         <div>
          <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-1.jpeg')} /></figure>
           <p>State Co-ordination Forum-3</p>
        </div>
      </div>
      </Modal3>
      {isOpen3 && (
   <ModalContent3 onClose3={() => setIsopen3(false)}>
     <img src={require('../../../img/Gallery/State-Co-ordination-Forum-1.jpeg')} alt="" />
   </ModalContent3>
 )}
</Col>
      
    </Row>
  </div>
     
    </div>
  )
}
