import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'

const Login = lazy(() => import('./pages/Login')); // ленивая загрузка


const App = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>} >
    <Switch>
      <Route path={ROUTES.LOGIN} component={Login} />
    </Switch>
    </Suspense>
  </Router>
);


export default App;
