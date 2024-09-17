import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lokingformore.module.css';
import { Col, Container, Row ,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Lokingformore = () => {

  return (
    <div className={styles.Lokingformore} data-testid="Lokingformore">
<div className='container pt-5 pb-5'>
<Row className='p-3'>
          <h2 className="block-heading" style={{ fontSize: "20px" }}>Looking For More Offers</h2>
        </Row>
   <Row>
      <Col sm={6} className=''>
         <div className='row p-3 looking_card_main m-2'>
            <div className='col-md-4 looking_card text-center'>
               <Image src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/svg/bank-offers-icon.svg"  style={{ width: '70px','margin':'31px auto 0', backgroundColor: "#ecf0fc" }} />
               <p className='pt-3'>Bank Offers</p>
            </div>
            <div className='col-md-8'>
            <div className='store-block'>
               <div className='store-card'>
               <Image src="/assets/sbi.jpg"  style={{ width: '100px'}}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/icic.jpg"  style={{ width: '100px'}}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/cti.jpg"  style={{ width: '100px'}}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/axis.jpg"  style={{ width: '100px'}}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/hsbc.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/kotak.jpg"  style={{ width: '100px' }}/>
            </div>
             
            </div>
               
            </div>
         </div>
      </Col>
      <Col sm={6} className=''>
      <div className='row p-3 looking_card_main m-2'>
            <div className='col-md-4 looking_card text-center'>
            <Image src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/svg/wallet-offers-icon.svg"  style={{ width: '70px','margin':'31px auto 0', backgroundColor: "#ecf0fc" }}/>
            <p className='pt-3'>Wallet Offer
            </p>
            </div>
            <div className='col-md-8'>
            <div className='store-block'>
               <div className='store-card'>
               <Image src="/assets/paypal.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/gpay.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/paytm.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/mobik.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/paypal.jpg"  style={{ width: '100px' }}/>
               </div>
               <div className='store-card'>
               <Image src="/assets/frecharg.jpg"  style={{ width: '100px' }}/>
               </div>
             
            </div>
               
            </div>
         </div>
      </Col>
   </Row>
</div>

      
    </div>
  );
};

Lokingformore.propTypes = {};

Lokingformore.defaultProps = {};

export default Lokingformore;
