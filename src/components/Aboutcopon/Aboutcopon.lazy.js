import React, { lazy, Suspense } from 'react';

const LazyAboutcopon = lazy(() => import('./Aboutcopon'));

const Aboutcopon = props => (
  <Suspense fallback={null}>
    <LazyAboutcopon {...props} />
  </Suspense>
);

export default Aboutcopon;
