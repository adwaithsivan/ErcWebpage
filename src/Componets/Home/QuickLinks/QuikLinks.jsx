import React from 'react'
import './quicklinks.css'
import Marquee from "../../Marquee/Marquee";
import { Fragment } from "react";
import { LinkTabs } from './LinkTabs';


export default function QuikLinks() {
  return (
    <div>
       <div className='link-container'>
        <h3>Quick Links</h3>
       </div>
       <LinkTabs/>
       </div>
       

  )
}





{/* <ul>
            <li>
                <a href='/acts' id="link-tabs">Acts</a>
            </li>
            <li>
                <a href='/policies'id="link-tabs">Policies</a>
            </li>
            <li>
                <a href='/advice-to-gok'id="link-tabs">Advices to Gok</a>
            </li>
            <li>
                <a href='/repealed-regulations'id="link-tabs">Repealed Regulations</a>
            </li>
            <li>
                <a href='/other-ercs'id="link-tabs">Other ERCs</a>
            </li>
          
        </ul> */}