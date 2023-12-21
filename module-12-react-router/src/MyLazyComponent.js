import React, { lazy, Suspense } from 'react';


const LazyReactLogo = lazy(()=>{return new Promise (resolve => {
  setTimeout(() => {
     resolve(import("./Como"))
  }, 2000);
})});


const MyLazyComponent = () => (
  <div style={{textAlign:"center"}}>
    <h1>Welcome to My Lazy-loaded React Component!</h1>
    <Suspense fallback={ <h1>Waiting..........</h1>}>
      <LazyReactLogo/>
    </Suspense>
  </div>
);

export default MyLazyComponent;