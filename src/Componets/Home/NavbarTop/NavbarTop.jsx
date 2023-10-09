import React from 'react'
import { Person} from '@mui/icons-material'




import './navbartop.css'

export default function NavbarTop() {
  return (
    <div className='NavbarTop'>
<div className='inner-navbar-top'>
<div className='topnav'>
<span><div className='line'></div></span>
<p>Last Updated</p>
<span><div className='line'></div></span>
  <p>10-07-2023</p>
  <span><div className='line'></div></span>
  <p>12:52</p>
  <span><div className='line'></div></span>
  <p>Site Visitors : 1000</p>
  <span><div className='line'></div></span>
</div>
<div className='topnav'>
<span><div className='line'></div></span>
  <p>English </p>
  <span><div className='line'></div></span>
  <p> മലയാളം</p>
  <span><div className='line'></div></span>
  <Person className='icon' />
  <span><div className='line'></div></span>
  <div className="screen_sizer">
     <ul>
       <li>
         <a href="#">A+</a>
       </li>
       <li>
         <a href="#">A</a>
       </li>
     <li>
         <a href="#">A-</a>
       </li>
   </ul>
   </div>
   <span><div className='line'></div></span>
   </div>
</div>
</div>
     
   
  )
}


