import React from 'react'
import Baner from '../../Componets/Home/Baner/Baner'
import Serch from '../../Componets/Home/Search/Serch'
import About from '../../Componets/Home/About/About'
import WhatsNew from '../../Componets/Home/WhatsNew/WhatsNew'
import News from '../../Componets/Home/NewsGallery/NewsGallery'
import AllLinks from '../../Componets/Home/AllLinks/AllLinks'




export default function Home() {
  return (
    <div className='Home'>

      <Baner />
      {/* <Banernew/> */}
      <Serch />
      <WhatsNew />
      <About />
      <News />
      <AllLinks />
    </div>
  )
}
