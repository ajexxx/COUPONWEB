import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {

  return(
  <div className={styles.Header} data-testid="Header">
    <Navbar className="custom-navbar desktop-view" expand="lg" sticky="top">
      <Container className='d-block'>
      
        <Row className="w-100 align-items-center mb-2">
          <Col lg={3} className="d-flex justify-content-lg-start justify-content-center">
            <Navbar.Brand href="#home" className="custom-brand d-flex align-items-center">
            
            </Navbar.Brand>
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-center justify-content-center">
            <Form className="search-bar d-flex w-100 ">
              <FormControl type="text" placeholder="Search 'Books, Shoes'" className="search-input" />
              <Button variant="danger" className="search-button">
                <i className="fa fa-search"></i>
              </Button>
            </Form>
          </Col>
          <Col lg={3} className="d-flex justify-content-lg-end justify-content-center">
            <Nav.Link href="#profile" className="profile-link d-flex align-items-center">
            <Image style={{width:"20px", borderRadius:"5px"}} src="https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180" /><span className='text-white m-2'> ₹0</span>
            </Nav.Link>
            
          </Col>
        </Row>

        <Row className="w-100 align-items-center">
          <Col>
            <Nav className="justify-content-center custom-nav">
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#topstores">Top Stores</Nav.Link>
              <Nav.Link href="#bestoffers">Best Offers</Nav.Link>
              <Nav.Link href="#collections">Collections</Nav.Link>
              <Nav.Link href="#shareearn" className="new-badge">Share & Earn</Nav.Link>
              <Button variant="outline-light" className="add-chrome-btn">
              Add to Chrome - It's Free
            </Button>
            </Nav>
          </Col>
        </Row>
       
      </Container>

    </Navbar>
    <Container>
       <img
                src="/assets/brand.png" 
                alt="Logo"
                className="brand-logo"

              />

      </Container>


      
    
  </div>
);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
