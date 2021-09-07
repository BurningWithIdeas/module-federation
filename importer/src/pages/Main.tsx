import React from 'react';

import ErrorBoundary from './ErrorBoundary';

// @ts-ignore
const WellcomeScreen = React.lazy(() => import('components/ExportPageComp'));

const Main = () => (
  <React.Suspense fallback="Loading...">
    <div>Something is here</div>
    <ErrorBoundary>
      <WellcomeScreen />
    </ErrorBoundary>
  </React.Suspense>
);

export default Main;
