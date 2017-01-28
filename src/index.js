import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Events from './Events.js';
import Map from './Map.js';
import ReportIncident from './ReportIncident.js';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'; 
import Home from './Home.js';

ReactDOM.render(
    <Router history={hashHistory}>
     <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="events" component={Events} />
      <Route path="map" component={Map} />
      <Route path="reportincident" component={ReportIncident} />
     </Route>
  </Router>,
  document.getElementById('root')
);
