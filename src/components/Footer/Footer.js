import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={styles.Footer} data-testid="Footer" style={{background: "#3f404a" ,position:"relative",top:"50px"}} >
      <Container  >
        <Row className='p-3'>
          <Col sm={4}>
            <div className='carddd'>
              <div className='img-wrapperrr'>
                <img width="100px" height="100px" src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/group_8.png' />
              </div>
              <div className='content-wraper'>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>Shopping Assistant</div>
                <div className="content">Get the free browser extension for instant access to top cashback &amp; coupons for your favorite online stores!</div>
                <a style={{ textDecoration: "none" }} href="" target="_blank">Add To Browser <img src='' /></a>
              </div>

            </div>
          </Col>
          <Col sm={4}>
            <div className='carddd' style={{ backgroundColor: "#fde0e0" }}>
              <div className='img-wrapperrr'>
                <img width="100px" height="100px" src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1499.png' />
              </div>
              <div className='content-wraper'>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>Shopping Assistant</div>
                <div className="content">Get the free browser extension for instant access to top cashback &amp; coupons for your favorite online stores!</div>
                <a style={{ textDecoration: "none" }} href="" target="_blank">Add To Browser <img src='' /></a>
              </div>

            </div>
          </Col>
          <Col sm={4}>
            <div className='carddd' style={{ backgroundColor: "#d4e8f4" }}>
              <div className='img-wrapperrr'>
                <img width="100px" height="100px" src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/group_8.png' />
              </div>
              <div className='content-wraper'>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>Shopping Assistant</div>
                <div className="content">Get the free browser extension for instant access to top cashback &amp; coupons for your favorite online stores!</div>
                <a style={{ textDecoration: "none" }} href="" target="_blank">Add To Browser <img src='' /></a>
              </div>

            </div>
          </Col>
        </Row>
        <hr style={{ color: "#fff" }} />

        <Row>
          <Col sm={3}>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", rowGap: "10px" }}>
              <div className='logo' >
                <img style={{ color: "#fff", width: "143px", height: "54px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group.png' />
              </div>
              <div className="desc" style={{ fontSize: "12px", color: "#fff" }}>
                India’s Go-To for Coupons,<br /> Offers &amp; Cashback
              </div>
              <div class="social-contaier" style={{ display: "flex", gap: "10px" }}>
                <a href="https://www.facebook.com/CouponDunia/" aria-label="facebook" target="_blank">
                  <img style={{ color: "#fff" }} src='https://www.coupondunia.in/modules/web/assets/images/home-page/instagram-icon.svg' />
                </a>
                <a href="https://www.instagram.com/coupondunia/" target="_blank" >
                  <img style={{ color: "#fff" }} src='https://www.coupondunia.in/modules/web/assets/images/home-page/instagram-icon.svg' />

                </a>
                <a href=" https://twitter.com/coupondunia/" aria-label="twitter" target="_blank" >
                  <img style={{ color: "#fff" }} src='	https://www.coupondunia.in/modules/web/assets/images/home-page/twitter-icon.svg' />

                </a>
                <a href="https://bit.ly/2UpQEDD" target="_blank" >
                  <img style={{ color: "#fff" }} src='https://www.coupondunia.in/modules/web/assets/images/home-page/instagram-icon.svg' />

                </a>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            <div className="title link" style={{ display: "flex", textAlign: "left", fontSize: "15px", borderLeft: "1px solid red", paddingLeft: "10px" }}>Help &amp; Support</div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'left' }}>
              <a className='link' href="/support/faqs">FAQs</a>
              <a className='link' href="/support">How It Works</a>
              <a className='link' href="/support/missing-cashbacks">Missing Cashback Claims</a>
              <a className='link' href="/contact-us">Contact Us</a>
            </div>
          </Col>
          <Col sm={2}>
            <div className="title link" style={{ display: "flex", textAlign: "left", fontSize: "15px", borderLeft: "1px solid red", paddingLeft: "10px" }}>CouponDunia</div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'left' }}>
              <a className='link' href="/support/faqs">About Us</a>
              <a className='link' href="/support">Press</a>
              <a className='link' href="/support/missing-cashbacks">Media</a>
              <a className='link' href="/contact-us">List Your Bussness</a>
              <a className='link' href="/contact-us">Privecy Policy</a>

            </div>
          </Col>
          <Col sm={2}>
            <div className="title link" style={{ display: "flex", textAlign: "left", fontSize: "15px", borderLeft: "1px solid red", paddingLeft: "10px" }}>Earning Programs & Benefits</div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'left' }}>
              <a className='link' href="/support/faqs">Shopping Assistant</a>
              <a className='link' href="/support">Share and Earn</a>
              <a className='link' href="/support/missing-cashbacks">Refer and Earn</a>
            </div>
          </Col>
          <Col sm={3}>
            <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
              <div style={{ color: "#fff" }}>Download App</div>
              <div className='logo' >
                <img width="100px" src='	https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1351.png' />
              </div>
              <div className='playstore-logo'>
                <img style={{ width: "135px", height: "40px" }} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1429.png' />
              </div>


            </div>
          </Col>
        </Row>
        <hr style={{ color: "#fff" }} />
        <Row>
        <Col sm={4}>
             <h4 className='p-3'  style={{display:"flex",fontSize:"20px",color:"#fff"}}>Latest From The Blog</h4>
            <div className='carddd' style={{ backgroundColor: "#4f515d" }}>
              <div >
                <img width="100px" height="100px" src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1518.png' />
              </div>
              <div className='content-wraper'>
                <span style={{fontSize:"13px",fontWeight:"500"}}>Amazon Great Freedom Festival 2024: Get Ready to Save Big</span>
                <div style={{fontSize:"13px",fontWeight:"normal"}}>By Preksha Malavia</div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
             <h4 className='p-3'  style={{display:"flex",fontSize:"20px",color:"#fff"}}>Latest From The Blog</h4>
            <div className='carddd' style={{ backgroundColor: "#4f515d" }}>
              
              <div className='content-wraper'>
                <span style={{fontSize:"13px",fontWeight:"500"}}>Seeking deal-driven superheroes! Join the discount hunters at CouponDunia and embark on an epic mission to save wallets and conquer the world of savings. Ready to seize the deal?</span>
              
              </div>
            </div>
          </Col>
          <Col sm={4}>
             <h4 className='p-3'  style={{display:"flex",fontSize:"20px",color:"#fff"}}>Latest From The Blog</h4>
            <div className='carddd' style={{ backgroundColor: "#4f515d" }}>
              
              <div className='content-wraper'>
                <span style={{fontSize:"13px",fontWeight:"500"}}>Get The Best Deals & Offers In Your Email.</span>
                <button>
                  <input type='email' placeholder='Enter-your-emil-adress'/>
                  <img  src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Icon-metro-arrow-right.svg'/>
                </button>
              
              </div>
            </div>
          </Col>
        </Row>
        <hr style={{color:"#fff"}}/>
        <Row>
          <div>
          <img style={{width:"100px"}} src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1418.png'/>
          </div>
          <i style={{color:"#fff"}} class="fa fa-copyright"></i>
          <p style={{color:"#fff"}}>2024 Bennett, Coleman & Co. Ltd. All rights reserved. | Indiatimes Commerce Network</p>
        </Row>
      </Container>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
