import React, { lazy, Suspense } from 'react';

const LazyCasbackincrese = lazy(() => import('./Casbackincrese'));

const Casbackincrese = props => (
  <Suspense fallback={null}>
    <LazyCasbackincrese {...props} />
  </Suspense>
);

export default Casbackincrese;
