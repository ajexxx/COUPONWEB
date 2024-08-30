import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Casbackincrese.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-bootstrap/Carousel';

const Casbackincrese = () => {

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/coupans')
      .then((res) => res.json())
      .then((json) => {
        setNews(json.slice(0,6));
        //console.log(news);
      });
  }, []);

  return(
  <div className={styles.Casbackincrese} data-testid="Casbackincrese">
    <Container>
     <Row className='cashback p-3'>
          <h3 className='text-start'>Cashback Incresed</h3>

        </Row>
       
        <Carousel>
          <Carousel.Item>
            <Row>
            {news.map((mynews) => (
              <Col sm={2}>
                <div className='cards'>
                  <div className='image-wrrpper'>
                    <img style={{ width: "80%" }} src= { mynews.brand_logo || "/assets/flipkart.jpg"} alt="" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", textAlign: "left", position: "relative", top: "18px" }}>
                    <div className="store-name">{mynews.store}</div>
                    <div style={{ fontSize: "12px" }}>Recently Added</div>
                  </div>
                  <div className='details' >
                    <div className='textt' style={{ background: "#e5fff5", marginTop: "50px" }}>
                      <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                      <div className="cashback-text">  <span className="cashback-text">{mynews.cashback}</span> </div>

                    </div>
                  </div>
                </div>
                  
              </Col>
             ))};
            </Row>
          </Carousel.Item>
        </Carousel>
      

        <Row className='p-4'>
          <section className='create-cd-account-ctr '>
            <div class="display-text" >
              <div>
                <div class="cb-people-count">Signup to earn CD Cashback every time you shop</div>
                <div class="get-cd-cashabck">Save real money over &amp; above offers &amp; discounts!</div>
              </div>
              <div className=" signup-link">Signup for Free</div>
            </div>

          </section>
        </Row>
        <Row>
          <img style={{ borderRadius: "35px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/Web-Expire-Soon-Banner.webp' />
        </Row>

        <Row className='p-4'>
          <section className='create-cd-account-ctr '>
            <div class="display-text" >
              <div class="sub-text">Subscribe to get the best deals right in your email</div>
              <input className="sub-input" id="emailHome" placeholder="Enter your email address"></input>

              <div className=" signup-link">Signup for Free</div>
            </div>
          </section>
        </Row>
        </Container>

  </div>
);
};

Casbackincrese.propTypes = {};

Casbackincrese.defaultProps = {};

export default Casbackincrese;
