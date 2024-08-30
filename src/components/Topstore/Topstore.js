import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Topstore.module.css';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Topstore = () => {

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
        <div className={styles.Topstore} data-testid="Topstore">


            <Container>

                <Row className='p-4' >
                    <h3 style={{ display: "flex", justifyContent: "flex-start" }}>Top store</h3>
                </Row>
                <Row className=' p-3' style={{ backgroundColor: "#ebf1ff" }}>
                    <Col sm={3}>
                        <div className=" card  " style={{ width: "288px", height: "320px" }}>

                            <div className='img-wrapper'>
                                <img src='https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/e3f0cb0aec65ed22f674fd634650db38/amazon-logo-large.jpg?41978' />
                            </div>
                            <div class="container">
                                <div className="name">Amazon</div>
                                <div className='cb-details' >
                                    <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                                    <div className='text'> Upto <span >5.2% Voucher Rewards</span></div></div>
                            </div>

                        </div>
                    </Col>

                    <Col sm={9} className='small-card'>




                        {news.map((mynews) => (
                            <div class="card" style={{ height: "150px", width: "150px" }} >
                                <a href='https://www.coupondunia.in/dell' style={{ textDecoration: "none" }}>

                                    <div className='img-wrapper'>
                                        <img src={mynews.brand_logo || "/assets/myntralogo.jpg"} alt="" style={{ width: "100%" }} />
                                    </div>

                                    <div className='cb-detail' >
                                        <img src="https://d3mqyttn50wslf.cloudfront.net/modules/mweb/assets/images/svg/cd-cb-icon-new.svg" alt="Cashback" width="24px" height="24px" />
                                        <span className='textt'>Upto{mynews.offer_value}</span>
                                    </div>
                                </a>
                            </div>

                        ))}
                    </Col>
                </Row>

            </Container>




        </div>
    );
};

Topstore.propTypes = {};

Topstore.defaultProps = {};

export default Topstore;
