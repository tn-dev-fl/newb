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

function MyComponent() {
  useEffect(() => {
    document.title = 'free proxies at proxiesfree.cc';
  }, []);
}

render(
<div>
  <MyComponent />
  <Nav />
  <div className="content">
    <div className="table-wrapper">
      <BasicTable />
    </div>
    <div className="card-wrapper">
      <BasicCard />
      {/* Include the additional BasicCard component */}
    </div>
  </div>
</div>




,
  document.getElementById('root')

);
