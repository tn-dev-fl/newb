import {useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom/client'
import {Nav} from './App.jsx'
import BasicTable from './table.jsx'
import './index.css'
import React from 'react'
import { render } from 'react-dom';

import HCaptcha from 'react-hcaptcha';

import {BasicCard,BasicCardsocks5,BasicCardsocks4} from './card.jsx'

function MyComponent() {
  useEffect(() => {
    document.title = 'free proxies at proxiesfree.cc';
  }, []);
}

render(
  <>
  <div className="container">
  <MyComponent/>
  <Nav />
  <div className="content">
    <div className="table-wrapper">
      <BasicTable />
    </div>
    <div className="card-wrapper">
      <BasicCard />
    </div>
    {/* Remove this extra CAPTCHA element */}
  </div>
</div>
</>,
  document.getElementById('root')

);
