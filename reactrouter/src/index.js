import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { lazy, Suspense } from 'react';
import Lazyloder from './Lazyloder';


const App = lazy(()=>{return new Promise (resolve => {
  setTimeout(() => {
     resolve(import("./App"))
  },3000);
})});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Lazyloder/>}>
    <App/>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
