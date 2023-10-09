
import Navn from 'react-bootstrap/Nav';

import Navbart from 'react-bootstrap/Navbar';
// import './navbar.css'
import '../Navbar/navbar2.css'


export default function Navbar() {
  return (
    <div className='top'>
        <Navbart expand="lg" className="navbar-back-colur">
      
       
        <Navbart.Toggle aria-controls="basic-navbar-nav"  
        
        
        
        />
        <Navbart.Collapse id="basic-navbar-nav">
          <Navn className="me-auto ms-auto">
            <Navn.Link className='nav-text-home' href="/">Home</Navn.Link>

            <Navn.Link className='nav-text-home' href="/gallery">Gallery</Navn.Link>

            <Navn.Link className='nav-text-home' href="/righttoinformation">RTI</Navn.Link>

            <Navn.Link className='nav-text-home' href="/dashboard">Dashboard</Navn.Link>

            <Navn.Link className='nav-text-home' href="/stateCoordination">State Co-ordination Forum</Navn.Link>


            <Navn.Link className='nav-text-home' href="/stateadvisory" >State Advisory Committee</Navn.Link>

            <Navn.Link className='nav-text-home' href="/startup" >Startup Entrepreneurship</Navn.Link>

            {/* <Navn.Link className='nav-text-home' href="/entrepreneur" >Entrepreneur</Navn.Link> */}

            <Navn.Link className='nav-text-home' href="/careerspage">Careers</Navn.Link>

            <Navn.Link className='nav-text-home' href="/archives">Archives</Navn.Link>
          
            <Navn.Link className='nav-text-home' href="/events">Events</Navn.Link>

            <div class="dropdown">
            <button
    class=" dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
   About
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="/commission">Commission</a></li>
    <li><a class="dropdown-item" href="organisation">Organisation</a></li>
    <li><a class="dropdown-item" href="history">History</a></li>
  </ul>
</div>

            <Navn.Link className='nav-text-home' href="/contact">Contact us</Navn.Link>

          </Navn>
        </Navbart.Collapse>
      {/* </Container> */}
    </Navbart>
  
    </div>
  )
}
