import React, { lazy, Suspense } from 'react';

const LazyHighcasback = lazy(() => import('./Highcasback'));

const Highcasback = props => (
  <Suspense fallback={null}>
    <LazyHighcasback {...props} />
  </Suspense>
);

export default Highcasback;
