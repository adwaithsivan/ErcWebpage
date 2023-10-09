import { Col, Container, Row } from "react-bootstrap";
import CarouselNews from "react-bootstrap/Carousel";
import "./newsgallery.css";

import Card from "react-bootstrap/Card";
import React, { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination,Navigation } from "swiper/modules";
import Button from "react-bootstrap/Button";

export default function NewsGallery() {
  return (
    <div className="background">
      <div classname="gallery-wrapper">
        <Row className="gallery-news">
          
        <Col md={6} >
            <h3 className="swiper-wrap" id="headings">Gallery</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                autoplay:true,
                
              }}
              modules={[Autoplay, Pagination]}
              className="myswiper"
              
            >
              <SwiperSlide className="swiper-slide">
                {" "}
                <img
                  className="container-gelley-img"
                  src={require("../../../img/gallery-img-1.jpg")}
                />
                <div className="overlay">
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="container-gelley-img"
                  src={require("../../../img/gellery-img-2.jpeg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="container-gelley-img"
                  src={require("../../../img/gallery-img-3.jpeg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="container-gelley-img"
                  src={require("../../../img/gallery-img-1.jpg")}
                />
              </SwiperSlide>
            </Swiper>
            <div className="gallery-btn">
              <a href="/gallery"><button className="btn btn-outline-primary">View More</button></a>
            </div>
          </Col>

            <Col md={6} className="news-area">
            <h3 className="news-head-1" id="headings">News</h3>
 <CarouselNews interval={3000} className="news-curosel curosel.fade">
              <CarouselNews.Item>
                <img
                   className="news-img"
                  src={require("../../../img/news-img-1.jpg")}
                />
                <CarouselNews.Caption>
                  {/* <h3 className='news-head-1'>Press Release</h3> */}
                  <p className="news-text-1">
                    Public hearing on approval cost data 2023 of Distribution
                    works. Petitioner : KSEB Ltd.
                  </p>

                 
                  <a href="/news">
                  <button type="button" class="btn btn-outline-primary btn-sm" >Mofe Info</button>
                  </a>
                </CarouselNews.Caption>
              </CarouselNews.Item>

              <CarouselNews.Item>
                <img
                  className="news-img"
                  src={require("../../../img/new-img-2.jpg")}
                />
                <CarouselNews.Caption>
                  {/* <h3 className='news-head-1'>Press Release</h3> */}
                  <p className="news-text-1">
                    {" "}
                    Consumer Awareness Programme at Vydyuthi Bhawan, Ponnkunnam
                    Conference Hall-05.07.2023
                  </p>

                 
                  <a href="/news">
                  <button type="button" class="btn btn-outline-primary btn-sm" >Mofe Info</button>
                  </a>
                </CarouselNews.Caption>
              </CarouselNews.Item>

              <CarouselNews.Item>
                <img
                  className="news-img"
                  src={require("../../../img/new-img-3.jpg")}
                />
                <CarouselNews.Caption>
                  {/* <h3 className='news-head-1'>Press Release</h3> */}
                  <p className="news-text-1">
                    {" "}
                    Consumer Awareness Programme at Infopark,
                    Kakkanad-11.07.2023
                  </p>

                 
                  <a href="/news">
                  <button type="button" class="btn btn-outline-primary btn-sm" >Mofe Info</button>
                  </a>
                 
                </CarouselNews.Caption>
              </CarouselNews.Item>
            </CarouselNews>
          
            </Col>
       
        </Row>
      </div>
    </div>
  );
}
