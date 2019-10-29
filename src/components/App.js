import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '../pages/index'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Dashboard from '../pages/dashboard'
import NotFound from '../pages/notFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App;
