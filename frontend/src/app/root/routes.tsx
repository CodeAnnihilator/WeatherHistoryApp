import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { hot } from 'react-hot-loader'

import Navigation from 'app/common/components/Navigation/Navigation'
import Header from 'app/common/components/Header/Header'

import Dashboard from 'app/modules/Dashboard/DashboardContainer'
import Description from 'app/modules/Description/Description'
import Developer from 'app/modules/Developer/Developer'

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
          <Route path="/dev_info" component={Description} />
          <Route path="/about" component={Developer} />
        </Switch>
      </div>
    </div>
  </div>
))