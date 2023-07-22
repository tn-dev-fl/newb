import {useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom/client'
import {Nav} from './App.jsx'
import BasicTable from './table.jsx'
import './index.css'
import React from 'react'
import { render } from 'react-dom';
import { HTTP } from './hcaptcha.jsx'
import HCaptcha from 'react-hcaptcha';
import {BasicCard, BasicCardweb} from './card.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import BasicTableweb from './web.jsx'
function MyComponent() {
  useEffect(() => {
    document.title = 'free proxies at proxiesfree.cc';
  }, []);
}
function Errorpage(){
  const error = useRouteError();
  return( <div id="error-page">
  <h1>Oops!</h1>
  <p>Sorry, an unexpected error has occurred.</p>
  <p>
    <i>{error.statusText || error.message}</i>
  </p>
</div>)
}
function Indy(){
  return(<div>
    
      <MyComponent />
      <Nav />
      <div className="content">
        <div className="table-wrapper">
          <BasicTable />
        </div>
        <div>
        </div>
        <div className="card-wrapper">
          <BasicCard />
          {/* Include the additional BasicCard component */}
        </div>
      </div>
    </div>)
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Indy/>,
    errorElement :<Errorpage/>,
  },
  {
    path:"web",
    element:<Web/>
  }
]);
function Web(){
  return(<div>
    
      <MyComponent />
      <Nav />
      <div className="content">
        <div className="table-wrapper">
          <BasicTableweb/>
        </div>
        <div>
        </div>
        <div className="card-wrapper">
          <BasicCardweb />
          {/* Include the additional BasicCard component */}
        </div>
      </div>
    </div>)
}
render(




<RouterProvider router={router}/>
,
  document.getElementById('root')

);
