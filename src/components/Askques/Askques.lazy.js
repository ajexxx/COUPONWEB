import React, { lazy, Suspense } from 'react';

const LazyAskques = lazy(() => import('./Askques'));

const Askques = props => (
  <Suspense fallback={null}>
    <LazyAskques {...props} />
  </Suspense>
);

export default Askques;
