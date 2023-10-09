import React from 'react'
import './otherlinks.css'
import { Box } from '@mui/material';

export default function OtherLinks() {
    return (
        <div className='marquee1' >

            <Box className="box"
                color="black"
                bgcolor="white" p={1}
                boxShadow={" 1px 1px 15px gray;"}
                padding="20px"
                height="75px"
                width='20rem'
                paddingTop={"15px"}
                >
                <img width="80" height="50" src={require('../../img/logos/mop.png')} alt="privacy-policy" />
                <span className='link-text '><a href='#'> MINISTRY OF POWER </a></span>
            </Box>

            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               height="75px"
               width='22rem'
               paddingTop={"12px"}
            >
                <img width="75" height="50" src={require('../../img/logos/gok.png')} alt="globe--v1"/>
                <span className='link-text '><a href='#'>GOVERNMENT OF KERALA</a></span>
                
            </Box>

             <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='25rem'
               height="75px"
               paddingTop={"15px"}
            >
                <img width="40" height="50" src={require('../../img/logos/cea.png')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> CENTRAL ELECTRICITY AUTHORITY</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"25px"}
            >
                <img width="26" height="26" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1"/>
                <span className='link-text '><a href='#'> APTEL</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"25px"}
            >
                <img width="26" height="26" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1"/>
                <span className='link-text '><a href='#'> SLDC</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"20px"}
            >
                <img width="85" height="40" src={require('../../img/logos/grid-india.png')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> GRID INDIA</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='27rem'
               height="75px"
               paddingTop={"23px"}
            >
                <img width="105" height="35" src={require('../../img/logos/emc.png')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> ENERGY MANAGEMENT CENTRE</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"20px"}
            >
                <img width="50" height="45" src={require('../../img/logos/anert.jpg')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> ANERT</a></span>              
            </Box>
       
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"22px"}
            >
                <img width="85" height="40" src={require('../../img/logos/grid-india.png')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> POSOCO</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='23rem'
               height="75px"
               paddingTop={"22px"}
            >
                <img width="80" height="30" src={require('../../img/logos/power_exchange.jpg')} alt="globe--v1"/>
                <span className='link-text '><a href='#'> POWER EXCHANGE</a></span>              
            </Box>
            
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='20rem'
               height="75px"
               paddingTop={"25px"}
            >
                <img width="26" height="26" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1"/>
                <span className='link-text '><a href='#'> NATIONAL POWER PORTAL</a></span>              
            </Box>
            <Box
               color="black"
               bgcolor="white" p={1}
               boxShadow={" 1px 1px 15px gray;"}
               padding="20px"
               width='15rem'
               height="75px"
               paddingTop={"25px"}
            >
                <img width="26" height="26" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1"/>
                <span className='link-text '><a href='#'> LICENSEES</a></span>              
            </Box>



        </div>
    )
}
