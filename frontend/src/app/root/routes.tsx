import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Navigation from 'app/components/Navigation/Navigation'
import Header from 'app/components/Header/Header'
import Dashboard from '../modules/Dashboard/index'
import { hot } from 'react-hot-loader'

import * as styles from './index.scss'

export const RouteMap = hot(module)(() => (
  <div className={styles.app}>
    <Navigation />
    <div className={styles.content}>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/dash" />
        <Route path="/dash" component={Dashboard} />
      </Switch>
    </div>
  </div>
))