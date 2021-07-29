import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomeView from '../views/Home/HomeView';
import Layout from '../components/Layout/Layout';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Layout><HomeView /></Layout>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
