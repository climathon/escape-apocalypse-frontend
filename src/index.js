import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import Start from './Start';
import Signup from './Signup';
import Challenge from './Challenge';
import Onboarding from './Onboarding'
import * as serviceWorker from './serviceWorker';

import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
<BrowserRouter>
  <App>
    <Switch>
      <Route path="/onboarding" exact component={Onboarding} />
      <Route path="/" exact component={Start} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/challenge" exact component={Challenge} />
    </Switch>
  </App>
</BrowserRouter>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
