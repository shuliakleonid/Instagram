import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/app.css'

const Login = lazy(() => import('./pages/Login')); // ленивая загрузка
const SignUp = lazy(() => import('./pages/Sign-up'));
const NotFound = lazy(() => import('./pages/Not-found'));


const App = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>} >
    <Switch>
      <Route path={ROUTES.LOGIN} component={Login}  />
      <Route path={ROUTES.SIGN_UP} component={SignUp}  />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  </Router>
);


export default App;
