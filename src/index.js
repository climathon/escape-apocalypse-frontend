import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import Start from './Start';
import Signup from './Signup'
import Challenge from './Challenge'
import ChallengeList from './ChallengeList';
import MyChallenges from './MyChallenges';
import Submit from './Submit';
import Success from './Success';
import Failure from './Failure';
import PlasticInfo from './PlasticInfo';
import * as serviceWorker from './serviceWorker';

import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
<BrowserRouter>
  <App>
    <Switch>
      <Route path="/start" exact component={Start} />
      <Route path="/challenge" exact component={Challenge} />
      <Route path="/" exact component={Signup} />
      <Route path="/challenges" exact component={ChallengeList} />
      <Route path="/myChallenges" exact component={MyChallenges} />
      <Route path="/submit" exact component={Submit} />
      <Route path="/success" exact component={Success} />
      <Route path="/failure" exact component={Failure} />
      <Route path="/plasticinfo" exact component={PlasticInfo} />
    </Switch>
  </App>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
