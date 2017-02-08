import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'normalize.css/normalize.css'
import '../public/fonts/stylesheet.css'
import Home from './pages/Home'
import './App.css'


render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root')
);
