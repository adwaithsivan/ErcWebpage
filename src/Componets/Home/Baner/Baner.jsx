import React from "react";
import { Col, Row } from "react-bootstrap";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";

import "./baner.css";

import { Fragment } from "react";

export default function Baner() {
  return (
    <div className="baner-main-aling">
      <Row className="mt-2" id="baner">
        <Col md={2} className="left-options">
          <a href="/petitionpage">
            <div className="baner-box">
              <div>
                <img
                  className="petition-icon"
                  src={require("../../../img/Petitions-icon.png")}
                />
                <Fragment>
                  {" "}
                  <a href="/petitionpage" className="Regulations-text">
                    Petitions
                  </a>
                </Fragment>
              </div>
            </div>
          </a>

          <a href="/scheduleofhearing">
            <div className="baner-box-7">
              <div>
                <img
                  className="Schedule-icon"
                  src={require("../../../img/shedule-icon.png")}
                />
                <Fragment>
                  <a href="/scheduleofhearing" className="Schedule-text">
                    Schedule of Hearing
                  </a>
                </Fragment>
              </div>
            </div>
          </a>

<a href="/orderpage">
<div className="baner-box-6">
            <div>
              {" "}
              <img
                className="orders-icon"
                src={require("../../../img/order-ic.png")}
              />
              <br></br>
              <Fragment>
                {" "}
                <a href="/orderpage" className="orders-text">
                  Orders
                </a>
              </Fragment>
            </div>
          </div>
</a>
        
<a href="/regulationspage">
          <div className="baner-box-4">
            <div>
              <img
                className="Regulations-icon"
                src={require("../../../img/Regulation-icon.png")}
              />
              <Fragment>
                {" "}
                <a href="/regulationspage" className="Regulations-text">
                  Regulations
                </a>
              </Fragment>
            </div>
          </div>
          </a>
<a href="/pressrelease" >
          <div className="baner-box-9">
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/material/24/FFFFFF/magazine.png"
                alt="magazine"
                id="press-icon"
              />
              <Fragment>
                {" "}
                <a href="/pressrelease" className="Consumer-text">
                  Press Release
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          <a href="/reports">
          <div className="baner-box-10">
            <div>
              {" "}
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/FFFFFF/external-reports-basic-ui-elements-2.3-sbts2018-outline-sbts2018.png"
                alt="external-reports-basic-ui-elements-2.3-sbts2018-outline-sbts2018"
                className="cgrf-icon"
              />
              <Fragment>
                <a href="/reports" className="Schedule-text">
                  Reports
                </a>
              </Fragment>
            </div>
          </div>
          </a>
        </Col>

        <Col md={8} className="baner-1-conrainer">
        <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
         }}
         pagination={{
          clickable: true,
          autoplay:true,
          
         }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={2000}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img
     className="baner-img"
     src={require("../../../img/Gallery/HB1.jpg")}
   /></SwiperSlide>

        <SwiperSlide> <img
     className="baner-img"
     src={require("../../../img/Gallery/HB2.jpg")}
    /></SwiperSlide>

        <SwiperSlide> <img
    className="baner-img"
     src={require("../../../img/Gallery/HB3.jpg")}
    /></SwiperSlide>
      </Swiper>
        </Col>

        <Col md={2} className="right-options">
          <a href="/licensees">
          <div className="baner-box-2">
            <div>
              <img
                className="Licensees-icon"
                src={require("../../../img/licence-icon.png")}
              />
              <Fragment>
                {" "}
                <a href="/licensees" className="Regulations-text">
                  Licensees
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          <a href="/ombudsman">
          <div className="baner-box-3">
            <div>
              {" "}
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/material/24/FFFFFF/administrator-male--v1.png"
                alt="administrator-male--v1"
                className="ombudsman-icon"
              />
              <Fragment>
                <a href="/ombudsman" className="Schedule-text">
                  Ombudsman
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          <a  href="/cgrf">
          <div className="baner-box-5">
            <div>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material/48/FFFFFF/conference-call--v2.png"
                alt="conference-call--v2"
                className="cgrf-icon"
              />
              <Fragment>
                {" "}
                <a href="/cgrf" className="cgrf-text">
                  CGRF
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          
          <a  href="/consumer_advocacy_cell">
          <div className="baner-box-8">
            <div>
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/morale.png"
                alt="morale"
                className="cac-icon"
                id='cac-icon'
              />
              <Fragment>
                {" "}
                <a href="/consumer_advocacy_cell" className="advocacy-text">
                Consumer Advocacy & Compliance Examination
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          
          <a href="/quotations">
          <div className="baner-box-11">
            <div>
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-quotation-mark-testimonials-and-feedback-smashingstocks-glyph-smashing-stocks.png"
                alt="external-quotation-mark-testimonials-and-feedback-smashingstocks-glyph-smashing-stocks"
                className="quote-icon"
              />
              <Fragment>
                {" "}
                <a href="/quotations" className="cgrf-text">
                  Quotations
                </a>
              </Fragment>
            </div>
          </div>
          </a>
          
          <a href="/other_documents">
          <div className="baner-box-12">
            <div>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/document--v1.png"
                alt="document--v1"
                className="doc-icon"
              />
              <Fragment>
                <a href="/other_documents" className="Schedule-text">
                  Other Documents
                </a>
              </Fragment>
            </div>
          </div>
          </a>
         
        </Col>
      </Row>
    </div>

    // </div>
  );
}



// <Swiper 
// autoplay={{
//  delay: 3000,
//  disableOnInteraction: false,
// }}
// pagination={{
//  clickable: true,
//  autoplay:true,
 
// }}
// modules={[Autoplay, Pagination]}
// className="mySwiper">
//  <SwiperSlide>
//    <img
//      className="baner-img"
//      src={require("../../../img/Gallery/HB1.jpg")}
//    />
//  </SwiperSlide>
//  <SwiperSlide>
//    <img
//      className="baner-img"
//      src={require("../../../img/Gallery/HB2.jpg")}
//    />
//  </SwiperSlide>
//  <SwiperSlide>
//    <img
//      className="baner-img"
//      src={require("../../../img/Gallery/HB3.jpg")}
//    />
//  </SwiperSlide>
// </Swiper>



