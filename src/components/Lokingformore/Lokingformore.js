import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lokingformore.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Lokingformore = () => {

  return (
    <div className={styles.Lokingformore} data-testid="Lokingformore">
      <Container>
        <Row className='p-3'>
          <h2 className="block-heading" style={{ fontSize: "20px" }}>Looking For More Offers</h2>
        </Row>
        <Row className='p-2'>
          <Col sm={6}>
            <div className='group-block'>
              <div className='title-block'>
                <div className='img-wrapper ' style={{ backgroundColor: "#ecf0fc", height: "190px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/svg/bank-offers-icon.svg' />
                  <div className="name">Bank Offers</div>
                </div>
              </div>
              <div className='store-block'>
                <a className='store-card'>
                  <img width="100%" src='https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/special_collection/mweb/a7e34cbe81b1f95689c2906e49290fab/collection_icon-100x200.jpg' />
                </a>
                <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/010646d61c6ccae84983965b23c40b52/collection_icon-100x200.jpg?292399' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/b2cb7b2642a5f7dee566a131a60cca0c/collection_icon-100x200.jpg?724480' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/b2cb7b2642a5f7dee566a131a60cca0c/collection_icon-100x200.jpg?724480' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/7444ab7b282e3aa0f5e54d4afc3209a9/collection_icon-100x200.jpg?595505' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/729cb40a1d76a0367d97f5d7aaf4ed78/collection_icon-100x200.jpg?94424' />
                </a>
              </div>

            </div>
          </Col>
          <Col sm={6}>
            <div className='group-block'>
              <div className='title-block'>
                <div className='img-wrapper ' style={{ backgroundColor: "#ecf0fc", height: "190px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src='https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/svg/wallet-offers-icon.svg' />
                  <div className="name">Wallet Offers</div>
                </div>
              </div>
              <div className='store-block'>
                <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/827900e8daaa654b901bf9ae3304943a/collection_icon-100x200.png?942002' />
                </a>
                <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/c3f5ff70d8b8d2da428d929f49e9317b/collection_icon-200x200.jpeg?881819' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/b338c3ecb4d7e7dd3ea373a99954a03e/collection_icon-100x200.jpg?416924' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/cba72779083c1b4a4200f85ec020e6dc/collection_icon-100x200.jpg?729403' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/96c7195829dcd885f96f00e449b3dd30/collection_icon-100x200.jpg?217901' />
                </a> <a className='store-card'>
                  <img width="100%" src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/sitespecific/in/special_collection/mweb/3473bad2877854f41deacdbfe00e4f53/collection_icon-100x200.jpg?687948' />
                </a>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Lokingformore.propTypes = {};

Lokingformore.defaultProps = {};

export default Lokingformore;
