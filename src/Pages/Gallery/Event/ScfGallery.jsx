import React ,{ useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './innergallery.css'

export const ScfGallery = ({ imageUrl }) => {
  const [showPreview, setShowPreview] = useState(false);


  const togglePreview = () => {
    setShowPreview(!showPreview);
  };
 


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
    
    <div className="thumbnail-wrapper">
    <h3>State Co-ordination Forum</h3>
    <Row className="mt-3">
          <Col md={4}>
            <div className="hover-column">
            <div>

        <img
        src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')}
        alt="Thumbnail"
        onClick={togglePreview}
        style={{ cursor: 'pointer' }}
        className="thumbnail-image"
      />
      <p  className="image-wrap">State Co-ordination Forum-1</p>

      {showPreview &&  (
        <div className="preview-overlay" onClick={togglePreview}>
          <img src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')} alt="Preview" className="preview-image"  style={{ width:"70rem", transition:"ease 1s" }}  />
          <div className="preview-background"/>
        </div>
      )}
    </div>
            </div>
          </Col>


          <Col md={4}>
            <div className="hover-column">
            <div>

        <img
        src={require('../../../img/Gallery/State-Co-ordination-Forum-2.jpeg')}
        alt="Thumbnail"
        onClick={togglePreview}
        style={{ cursor: 'pointer' }}
        className="thumbnail-image"
      />
      <p  className="image-wrap">State Co-ordination Forum-2</p>

      {showPreview &&  (
        <div className="preview-overlay" onClick={togglePreview}>
          <img src={require('../../../img/Gallery/State-Co-ordination-Forum-2.jpeg')} alt="Preview2" className="preview-image-2"  style={{ width:"70rem", transition:"ease 1s" }}  />
          <div className="preview-background"/>
        </div>
      )}
    </div>
            </div>
          </Col>


    </Row>
    </div>

      

    </div>
  )
}





// <div className="gallery-wrapper">
// <h3>State Co-ordination Forum</h3>
// <Row className='mt-3'>
//           <Col md={4}>
//             <div className="hover02 column">
              
//               <div>
//                 <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-3.jpeg')} /></figure>
//                 <span>State Co-ordination Forum-1</span>
//               </div>
//             </div>
//           </Col>

//           <Col md={4}>
//             <div className="hover02 column">
//               <div>
//                 <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-2.jpeg')} /></figure>
//                 <span>State Co-ordination Forum-2</span>
//               </div>
//             </div>
//           </Col>

//           <Col md={4}>
//             <div className="hover02 column">
//               <div>
//                 <figure> <img className='gallery-img' src={require('../../../img/Gallery/State-Co-ordination-Forum-1.jpeg')} /></figure>
//                 <span>State Co-ordination Forum-1</span>
//               </div>
//             </div>
//           </Col>
//         </Row>
// </div>
