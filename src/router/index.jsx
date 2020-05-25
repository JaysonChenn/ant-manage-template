import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import loadbale from '../utils/loadable';

const Layout = loadbale(() => import('../views/Layout'));
const Login = loadbale(() => import('../views/Login'));
const Index = loadbale(() => import('../views/Index'));

let styleObj = {
  warpper: {
    wdith: '100%',
    height: '100%',
  },
  spin: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Test = () => {
  return (
    <div style={styleObj.warpper}>
      <Spin style={styleObj.spin} tip='Loading...' />
    </div>
  );
};

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/login' />} />
        <Route path='/test' exact component={Test} />
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
