import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Navigation from 'app/common/components/Navigation/Navigation'
import Header from 'app/common/components/Header/Header'
import Dashboard from '../modules/Dashboard/DashboardContainer'
import { hot } from 'react-hot-loader'

import * as styles from './index.scss'

export const RouteMap = hot(module)(() => (
  <div className={styles.app}>
    <Navigation />
    <div className={styles.content}>
      <Header />
      <div className={styles.main}>
        <Switch>
          <Redirect exact from="/" to="/dash" />
          <Route path="/dash" component={Dashboard} />
        </Switch>
      </div>
    </div>
  </div>
))