import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Dashboard from '../modules/Dashboard/index'
import { hot } from 'react-hot-loader'

export const RouteMap = hot(module)(() => (
  <Switch>
    <Redirect exact from="/" to="/dash" />
    <Route path="/dash" component={Dashboard} />
  </Switch>
))