import React, { lazy, Suspense } from 'react';

const LazyTopstore = lazy(() => import('./Topstore'));

const Topstore = props => (
  <Suspense fallback={null}>
    <LazyTopstore {...props} />
  </Suspense>
);

export default Topstore;
