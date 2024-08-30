import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';







import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const Main = () => {

  return (
    <Container>
      
        <Row >
          <Col sm={2}></Col>
          <Col sm={5}>
            <h1 id='h'>Welcome to CouponDunia - India's Trusted Coupons, Offers &amp; Cashback Website</h1>
          </Col>
          <Col sm={2}></Col>
          <Col sm={3} style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className='coundown'>
              <img style={{ width: "100%" }} src='https://www.coupondunia.in/modules/web/assets/images/daily_raward_home_page_scratch_strip.webp' />
              <div class="countdown-strip-text">
                <span class="title1">Win Scratch Card : </span>
                <span class="title2 countdown-timer" data-time-initialization="2024-09-01T05:29:59+05:30">25  Days Left</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Carousel>
            <Carousel.Item>
              <Row>

                <Col sm={6}>
                  <img
                    width="100%"

                    src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/a738515fc1ad23a88df65e6c0b388d8a/banner_home-580x1160.webp?293661"
                    alt=""
                  />
                </Col>
                <Col sm={6}>
                  <img
                    width="100%"

                    src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/9a9cdb64bcc196b0536dc8c0b57caf85/banner_home-580x1160.webp?595140"
                    alt=""
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {/* <Col sm={1}></Col> */}

                <Col sm={6}>
                  <img
                    width="100%"
                    src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/a738515fc1ad23a88df65e6c0b388d8a/banner_home-580x1160.webp?293661"
                    alt=""
                  />
                </Col>
                <Col sm={6}>
                  <img
                    width="100%"
                    src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/9a9cdb64bcc196b0536dc8c0b57caf85/banner_home-580x1160.webp?595140"
                    alt=""
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className='p-3'  >
          <Col sm={6}>
            <div className="block-heading">Three Steps to save with CouponDunia</div>
          </Col>
        </Row>

        <Row className='p-3'>
          <Col sm={4}>
            <div className='block-content'>
              <div className='section-left'>
                <img src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/cd-step-login.svg' />
                <div class="text-container">
                  <span className="headerr">Log In &amp; Shop</span>
                  <span className="description">Click your favourite coupon &amp; Shop</span></div>
              </div>
              <div className='section-right'>1</div>
            </div>
          </Col>


          <Col sm={4}>
            <div className='block-content'>
              <div className='section-left'>
                <img src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/cd-step-cashback-earned.svg' />
                <div class="text-container">
                  <span className="headerr">Log In &amp; Shop</span>
                  <span className="description">Click your favourite coupon &amp; Shop</span></div>
              </div>
              <div className='section-right'>2</div>
            </div>
          </Col>

          <Col sm={4}>
            <div className='block-content'>
              <div className='section-left'>
                <img src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/cd-step-withdraw-cashback.svg' />
                <div class="text-container">
                  <span className="headerr">Log In &amp; Shop</span>
                  <span className="description">Click your favourite coupon &amp; Shop</span></div>
              </div>
              <div className='section-right'>3</div>
            </div>
          </Col>



        </Row>

        <Row className='p-3' style={{ display: "flex", justifyContent: "flex-start" }}>
          <Col sm={6}>
            <h3 className="block-heading">Independence Day Sale</h3>
          </Col>

        </Row>
        <Row>

          <img style={{ width: '100%' }} src='https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/5c9b807a5499c9687b50bb7d061fa9dc/banner_home_promotional-225x1662.webp?222640' />

        </Row>
    
    </Container>

  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
