import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Highcasback.module.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';



const Highcasback = () => {


  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/coupans')
      .then((res) => res.json())
      .then((json) => {
        setNews(json.slice(0, 10));
        //console.log(news);
      });
  }, []);



  return (
    <div className={styles.Highcasback} data-testid="Highcasback">



      <Container>
        <Row className='p-3'>
          <div class="heading-wrapper">
            <h3 className="block-heading">High Cashback Stores</h3>
            <a className="more-btn">Show More</a></div>
        </Row>

        <Row>
          <Carousel>
            {news.map((mynews) => (
              <Carousel.Item>
         
                <Row>
                  <Col sm={3}>
                    <div class="flip-card">
                      <div class="image-wrrper">
                        <img style={{ width: "100%" }} src={mynews.brand_logo || "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/458fa4227dd186d3ccf26dac9806df2d/swisse-coupons-logo-large.png?682507"} alt="" />
                      </div>
                      <div className='details' >
                        <span className="store-name" style={{ position: "relative", display: "flex", top: "18px" }}>{mynews.store}</span>
                        <div className='textt' style={{ background: "#e5fff5", marginTop: "50px" }}>
                          <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                          <div className="cashback-text">   <span >   {mynews.cashback} </span> </div>

                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div class="flip-card">
                      <div class="image-wrrper">
                        <img style={{ width: "100%" }} src={mynews.brand_logo || "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/458fa4227dd186d3ccf26dac9806df2d/swisse-coupons-logo-large.png?682507"} alt="" />
                      </div>
                      <div className='details' >
                        <span style={{ position: "relative", display: "flex", top: "18px" }}>{mynews.store}</span>
                        <div className='textt' style={{ background: "#e5fff5", marginTop: "50px" }}>
                          <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                          <div className="cashback-text">   <span className="cashback-text"> {mynews.cashback}  </span> </div>
                        </div>
                      </div>
                    </div>

                  </Col>
                  <Col sm={3}>
                    <div class="flip-card">
                      <div class="image-wrrper">
                        <img style={{ width: "100%" }} src={mynews.brand_logo || "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/2175a71366b803b9bc16348ae2d5caa8/setu-coupons-logo-small.jpeg?994498"} alt="" />
                      </div>
                      <div className='details' >
                        <span style={{ position: "relative", display: "flex", top: "18px" }}>{mynews.store}</span>
                        <div className='textt' style={{ background: "#e5fff5", marginTop: "50px" }}>
                          <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                          <div className="cashback-text">   <span className="cashback-text"> {mynews.cashback} </span> </div>
                        </div>
                      </div>
                    </div>

                  </Col>
                  <Col sm={3}>
                    <div class="flip-card">
                      <div class="image-wrrper">
                        <img style={{ width: "100%" }} src={ mynews.brand_logo || "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/29ed62acbdd14fac3dcac91860c24cd5/kamaayurveda-logo-small.jpg?522024"} alt="" />
                      </div>
                      <div className='details' >
                        <span style={{ position: "relative", display: "flex", top: "18px" }}>{mynews.store}</span>
                        <div className='textt' style={{ background: "#e5fff5", marginTop: "50px" }}>
                          <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                          <div className="cashback-text">   <span className="cashback-text"> {mynews.cashback} </span> </div>
                        </div>
                      </div>
                    </div>

                  </Col>
                </Row>

              </Carousel.Item>
            ))};
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

Highcasback.propTypes = {};

Highcasback.defaultProps = {};

export default Highcasback;
