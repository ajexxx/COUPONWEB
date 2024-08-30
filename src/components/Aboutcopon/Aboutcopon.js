import React from 'react';
import PropTypes from 'prop-types';
import styles from './Aboutcopon.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Aboutcopon = () => {

  return (
    <div className={styles.Aboutcopon} data-testid="Aboutcopon">
     <Container>
      <Row className='p-3'>
        <h2 className="block-heading" style={{ fontSize: "20px" }}>About CouponDunia</h2>

      </Row>
      <Row className='p-3'>
        <Col sm={4} >

          <div className="tile-wrapper">
            <div className="img-wrapper">
              <img src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1484.png" alt="times-icon" width="122px" height="123px" />
            </div>
            <div className="content-wrapper">
              <div className="content">A Times Group Company</div>
            </div>
          </div>
        </Col>
        <Col sm={4} >
          <div className="tile-wrapper">
            <div className="img-wrapper">
              <img src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/stores-icon.png" alt="times-icon" width="122px" height="123px" />
            </div>
            <div className="content-wrapper">
              <div className="content">3000+ Online Brands</div>
            </div>
          </div>
        </Col>
        <Col sm={4} >
          <div className="tile-wrapper">
            <div className="img-wrapper">
              <img src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1543.png" alt="times-icon" width="122px" height="123px" />
            </div>
            <div className="content-wrapper">
              <div class="content">Trusted By <br />100 Cr+ Shoppers</div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="block-heading p-3" >Hear It From Our Customers</div>

        <Col sm={4}>
          <div className='title-wrappwr'>
            <div style={{ display: "flex", gap: "4px", marginBottom: "17px" }}>
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />


            </div>
            <div className="content">My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart &amp; Myntra. Using this app for a long time and I am really enjoying its features.</div>
            <div style={{ textAlign: "left" }}>Madhuri Naik, Navi Mumbai</div>
          </div>

        </Col>
        <Col sm={4}>
          <div className='title-wrappwr'>
            <div style={{ display: "flex", gap: "4px", marginBottom: "17px" }}>
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />


            </div>
            <div className="content">My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart &amp; Myntra. Using this app for a long time and I am really enjoying its features.</div>
            <div style={{ textAlign: "left" }}>Madhuri Naik, Navi Mumbai</div>
          </div>

        </Col>
        <Col sm={4}>
          <div className='title-wrappwr'>
            <div style={{ display: "flex", gap: "4px", marginBottom: "17px" }}>
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />
              <img style={{ height: "13px", width: "13px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-ionic-ios-star.svg' />


            </div>
            <div className="content">My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart &amp; Myntra. Using this app for a long time and I am really enjoying its features.</div>
            <div style={{ textAlign: "left" }}>Madhuri Naik, Navi Mumbai</div>
          </div>

        </Col>
      </Row>

   </Container>
    </div>
  );
};

Aboutcopon.propTypes = {};

Aboutcopon.defaultProps = {};

export default Aboutcopon;
