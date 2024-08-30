import React, { lazy, Suspense } from 'react';

const LazyCouponapi = lazy(() => import('./Couponapi'));

const Couponapi = props => (
  <Suspense fallback={null}>
    <LazyCouponapi {...props} />
  </Suspense>
);

export default Couponapi;
