
import './App.css';
import About from './Componets/Home/About/About';
import Commission from './Pages/Commission/Commission';
import Home from './Pages/Home/Home';

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Organisation from './Pages/Organisation/Organisation';
import StateAdvisory from './Pages/StateAdvisory/StateAdvisory';
import StateCoordination from './Pages/StateCo-ordination/StateCoordination';
import Navbar from './Componets/Home/Navbar/Navbar';
import NavbarTop from './Componets/Home/NavbarTop/NavbarTop';
import Logoname from './Componets/Home/Logo/Logoname';

import Event from './Pages/Gallery/Event/Gallery';

// import Spio from './Pages/RightToInFormation/SPIO/Spio';
// import AppellateAuthority from './Pages/RightToInFormation/AppellateAuthority/AppellateAuthority';
// import MandotoryDisclosure from './Pages/RightToInFormation/MandotoryDisclosure/MandotoryDisclosure';

import Contact from './Pages/ContactUs/Contact';
import Archives from './Pages/Archives/Archives';
import Feedback from './Componets/Feedback/Feedback';
import RightToInformation from './Pages/RightToInformation/RightToInformation';
import Careerspage from './Pages/Careers/Careerspage';
import Orderpage from './Pages/OrderPge/Orderpage';
import History from './Pages/History/History';
import Regulationspage from './Pages/Regulations/Regulationspage';
import Petitionpage from './Pages/Petitions/Petitionpage';
import Faq from './Componets/Faq/Faq';
import ScheduleOfHearing from './Pages/ScheduleOfHearing/ScheduleOfHearing';
import Ombudsman from './Pages/Ombudsman/Ombudsman';
import Licensees from './Pages/Licensees/Licensees';
import Footer2 from './Componets/Home/Footer2/Footer2';
import Dashboard from './Pages/Dashboard/Dashboard';
import Events from './Pages/Events/Events';
import Login from './Pages/Petitions/Login/Login'
import Eregistration from './Pages/Petitions/Regitration/Eregistration';
import Efilling from './Pages/Petitions/Petition e-filling/Efilling';
import PressRelease from './Pages/PressRelease/PressRelease';
import CGRF from './Pages/CGRF/CGRF';
import Reports from './Pages/Reports/Reports';
import OtherDocuments from './Pages/OtherDocuments/OtherDocuments';
import ConsumerAdvocancy from './Pages/ConsumerAdvocancy/ConsumerAdvocancy';
import Startup from './Pages/Startup/Startup';
import Quotations from './Pages/Quotations/Quotations';
import FeedbackPage from './Pages/FeedbackPage/FeedbackPage';
import FaqPage from './Pages/Faq/FaqPage';
import { Acts } from './Componets/Home/QuickLinks/LinkPages/Acts';
import { Policies } from './Componets/Home/QuickLinks/LinkPages/Policies';
import { Advices } from './Componets/Home/QuickLinks/LinkPages/Advices';
import { RepealedRegulation } from './Componets/Home/QuickLinks/LinkPages/RepealedRegulation';
import { OtherErc } from './Componets/Home/QuickLinks/LinkPages/OtherErc';
import { InnerEvents } from './Pages/Events/Inner Event Pages/InnerEvents';
import { News } from './Pages/News/News';
import { LinkTabs } from './Componets/Home/QuickLinks/LinkTabs';
import NewsPage from './Pages/News/NewsPage';
import Gallery from './Pages/Gallery/Event/Gallery';
import { ScfGallery2 } from './Pages/Gallery/Event/ScfGallery2';
import { CapGallery } from './Pages/Gallery/Event/CapGallery';
import { NewsPage2 } from './Pages/News/NewsPage2';
import { NewsPage3 } from './Pages/News/NewsPage3';
import Rules from './Componets/Home/QuickLinks/LinkPages/Rules';


function App() {
  return (
    <div className="App">
         <BrowserRouter>

               <NavbarTop/>
                <Logoname/>
                
              <Navbar/>
              <Feedback/>
              <Faq/>
          <Routes>
      <Route path='/petitionpage/login' Component={Login} />
      <Route path='/petitionpage/e-registration' Component={Eregistration} />
                <Route exact path ="/" Component={Home}/>
                <Route  path ="/commission" Component={Commission}/>
                <Route  path ="/organisation" Component={Organisation}/>
                <Route  path ="/stateadvisory" Component={StateAdvisory}/>
                <Route  path ="/stateCoordination" Component={StateCoordination}/>
                <Route  path='/feedback' Component={FeedbackPage}/>
                <Route  path ="/history" Component={History}/>
               
                <Route  path ="/newspage" Component={NewsPage}/>
              
                <Route  path ="/archives" Component={Archives}/>
                <Route  path ="/startup" Component={Startup}/>
                <Route  path = "/faqpage" Component={FaqPage}/>
                <Route  path ="/righttoinformation" Component={RightToInformation}/>  
                <Route path='/dashboard'Component={Dashboard} />
                <Route  path ="/careerspage" Component={Careerspage}/>             
                <Route  path ="/contact" Component={Contact}/>
                <Route path='/events' Component={Events} />
                <Route path='/news' Component={News} />

{/* -------------------------------------gallery_paths--------------------------------------- */}
                   

                <Route  path ="/gallery" Component={Gallery}/>
                <Route  path ="/scfgallery" Component={ScfGallery2}/>
                <Route  path ="/capgallery" Component={CapGallery}/>

{/* -------------------------------------gallery_paths--------------------------------------- */}


                <Route  path ="/newspage2" Component={NewsPage2}/>
                <Route  path ="/newspage3" Component={NewsPage3}/>

               
                <Route  path ="/orderpage" Component={Orderpage}/>
                <Route  path ="/regulationspage" Component={Regulationspage}/>
                <Route  path ="/petitionpage" Component={Petitionpage}/>
                <Route  path ="/reports" Component={Reports}/>
                <Route  path ="/consumer_advocacy_cell" Component={ConsumerAdvocancy}/>
                <Route  path ="/pressrelease" Component={PressRelease}/>
                <Route  path ="/cgrf" Component={CGRF}/>
                <Route  path ="/other_documents" Component={OtherDocuments}/>

                <Route  path ="/scheduleofhearing" Component={ScheduleOfHearing}/>
                <Route  path ="/ombudsman" Component={Ombudsman}/>
                <Route  path ="/licensees" Component={Licensees}/>
                  <Route  path='/e-filling' Component={Efilling}/>
                  <Route  path ="/quotations" Component={Quotations}/>

{/* -------------------------------------Quick Links Pages--------------------------------------- */}

                <Route  path='/acts' Component={Acts}/>
                <Route  path='/policies' Component={Policies}/>
                <Route  path='/rules' Component={Rules}/>
                <Route  path='/advice-to-gok' Component={Advices}/>
                <Route  path='/repealed-regulations' Component={RepealedRegulation}/>
                <Route  path='/other-ercs' Component={OtherErc}/>

{/* -------------------------------------Quick Links Pages--------------------------------------- */}

{/* -------------------------------------Inner Event Pages--------------------------------------- */}

                <Route  path='/inner_events1' Component={InnerEvents}/>
               
{/* -------------------------------------Inner Event Pages--------------------------------------- */}

{/* -------------------------------------Inner Startup Pages--------------------------------------- */}

                <Route  path='/inner_startup1' Component={InnerEvents}/>
               
{/* -------------------------------------Inner Startup Pages--------------------------------------- */}

          </Routes>
            
          <Footer2/>
            
         </BrowserRouter>



    </div>
  ); 
}

export default App;
