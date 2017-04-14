import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'normalize.css/normalize.css'
import '../public/fonts/stylesheet.css'
import Home from './pages/Home'
import Artist from './pages/Artist'
import './App.css'

render(
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
    history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:artist" component={Artist} />
  </Router>,
  document.getElementById('root')
);
