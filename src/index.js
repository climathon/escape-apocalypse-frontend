import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import Start from './Start';
import * as serviceWorker from './serviceWorker';

import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
<BrowserRouter>
  <App>
    <Switch>
      <Route path="/" exact component={Start} />
    </Switch>
  </App>
</BrowserRouter>
  
, document.getElementById('root'));

serviceWorker.unregister();
