import React from 'react';
import PropTypes from 'prop-types';
import styles from './Askques.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


const Askques = () => {

  return (
    <div className={styles.Askques} data-testid="Askques">
      <div className='container pt-5 pb-5'>
        <h6 className='mb-4'><b>Frequently Asked Questions</b></h6>
        <Accordion className='border-0'>
          <Accordion.Item eventKey="0" className="mb-4 border-0" >
            <Accordion.Header style={{ 'border': '1px solid #80808042' }}>What is CouponDunia?</Accordion.Header>
            <Accordion.Body className='border-0'>
              Founded in 2010, CouponDunia is India's largest discounts, offers, and cashback website. At CouponDunia, we help you save money through our comprehensive listing of coupons, offers, deals and discounts from 2000+ online brands including top stores like Flipkart, Amazon, MakeMyTrip, PayTM and BookMyShow. You can also earn real money in the form of Cashback on top of the merchant discounts every time you shop through us. Once you have 250 or more CD cashback, you can transfer it when and as you like - into your bank account, for a mobile recharge or Flipkart/Amazon vouchers. All you have to do to earn is:
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mb-4 border-0" >
            <Accordion.Header style={{ 'border': '1px solid #80808042' }}>What is CouponDunia?</Accordion.Header>
            <Accordion.Body className='border-0'>
              Founded in 2010, CouponDunia is India's largest discounts, offers, and cashback website. At CouponDunia, we help you save money through our comprehensive listing of coupons, offers, deals and discounts from 2000+ online brands including top stores like Flipkart, Amazon, MakeMyTrip, PayTM and BookMyShow. You can also earn real money in the form of Cashback on top of the merchant discounts every time you shop through us. Once you have 250 or more CD cashback, you can transfer it when and as you like - into your bank account, for a mobile recharge or Flipkart/Amazon vouchers. All you have to do to earn is:
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mb-4 border-0" >
            <Accordion.Header style={{ 'border': '1px solid #80808042' }}>What is CouponDunia cashback?</Accordion.Header>
            <Accordion.Body className='border-0'>
              CD Cashback is real money that you can earn over & above the discounts you get when shopping online. Stores and offers that have additional cashback can be identified by looking for labels in green, like '+ Upto 5% CD Cashback' or '+ Flat Rs. 100 CD Rewards' etc.         </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mb-4 border-0" >
            <Accordion.Header style={{ 'border': '1px solid #80808042' }}>What are CD Rewards?</Accordion.Header>
            <Accordion.Body className='border-0'>
              CD Rewards is cashback earned when you shop on FLIPKART via CouponDunia.

              This cashback is given the different name "CD Rewards" because Flipkart does not allow withdrawal of this cashback to a bank account.

              The process for earning of CD Rewards is the same as CD Cashback. CD Rewards can be withdrawn and used for mobile or DTH Recharge and converted to Flipkart Gift Card or Amazon Pay Voucher. In short, you can withdraw CD Rewards as you like, except to a bank account. This is why the balance available for bank transfer may be less than your total available balance.        </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

Askques.propTypes = {};

Askques.defaultProps = {};

export default Askques;
