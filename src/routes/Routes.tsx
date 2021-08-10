import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import HomeView from '../views/Home/HomeView';
import Layout from '../components/Layout/Layout';
import UsView from '../views/Us/UsView';
import ContactsView from '../views/Contacts/ContactsView';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Layout><HomeView /></Layout>
    </Route>
    <Route exact path="/nosotros">
      <Layout><UsView /></Layout>
    </Route>
    <Route exact path="/contactos">
      <Layout><ContactsView /></Layout>
    </Route>
  </Switch>
);

export default Routes;
