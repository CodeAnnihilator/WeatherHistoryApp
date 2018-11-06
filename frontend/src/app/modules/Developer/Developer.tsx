import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Navigation from './components/Navigation/Navigation'

import Technologies from './components/Technologies/Technologies'
import Experience from './components/Experience/Experience'
import Contacts from './components/Contacts/Contacts'

import * as styles from './developer.scss'



interface Props extends RouteComponentProps<{}> {}

// from typings
interface RouteComponentProps<P> {
  match: match<P>
}

interface match<P> {
  params: P
  isExact: boolean
  path: string
  url: string
}

export default class Developer extends React.Component<Props> {

  render(): React.ReactElement<{}> {
    const { match: { url } } = this.props
    return (
      <div className={styles.container}>
        <Navigation url={url} />
        <div className={styles.pages}>
          <Switch>
            <Redirect exact from={url} to={`${url}/technologies`} />
            <Route path={`${url}/technologies`} component={Technologies} />
            <Route path={`${url}/experience`} component={Experience} />
            <Route path={`${url}/contacts`} component={Contacts} />
          </Switch>
        </div>
      </div>
    )
  }
}