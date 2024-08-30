import React, { lazy, Suspense } from 'react';

const LazyLokingformore = lazy(() => import('./Lokingformore'));

const Lokingformore = props => (
  <Suspense fallback={null}>
    <LazyLokingformore {...props} />
  </Suspense>
);

export default Lokingformore;
