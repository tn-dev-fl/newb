import {useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom/client'
import {Nav} from './App.jsx'
import BasicTable from './table.jsx'
import './index.css'
import React from 'react'
import { render } from 'react-dom';
import { HTTP } from './hcaptcha.jsx'
import HCaptcha from 'react-hcaptcha';
import {BasicCard} from './card.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Home } from './web.jsx'
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
    path:"/about",
    element:<Home/>
  }
]);
render(




<RouterProvider router={router}/>
,
  document.getElementById('root')

);
