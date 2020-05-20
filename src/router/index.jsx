import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../views/Layout';
import Login from '../views/Login';
import Index from '../views/Index'

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact render={() => <Redirect to="/login" />} />
        <Route path='/login' exact component={Login} />
        <Route>
          <Layout>
            <Route path='/index' component={Index} />
          </Layout>
        </Route>
      </Switch>
    </HashRouter>
  );
};
