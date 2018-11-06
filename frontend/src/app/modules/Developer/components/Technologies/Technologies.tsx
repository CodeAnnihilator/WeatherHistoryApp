import * as React from 'react'

import * as styles from './technologies.scss'

export default class Technologies extends React.Component<{}> {

  render(): React.ReactElement<{}> {
    return (
      <div>
        <h1 className={styles.header}>TECHNOLOGIES STACK</h1>
        <p>
          My real working experience is related to Front-End engineering, 
          but I also have some experience working with backend technologies 
          (my own pet projects). That’s why I’m looking for Front-End engineer 
          positions with future possibilities to also write backend.
        </p>
        <h3 className={styles.sub_header}>As a front-end engineer, I have a rich experience working with next technologies:</h3>
        <ul>
          <li>React</li>
          <li>React-Router</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Reselect</li>
          <li>Webpack</li>
          <li>Immutable.js</li>
          <li>Axios</li>
          <li>Babel (ES5+)</li>
          <li>Sass</li>
          <li>Websockets (channeling with sagas)</li>
          <li>Stripe Payments</li>
          <li>Docker</li>
        </ul>
        <h3 className={styles.sub_header}>In a front-end field, currently Im learning and getting better at next technologies:</h3>
        <ul>
          <li>D3.js</li>
          <li>Three.js</li>
          <li>Typescript</li>
          <li>Unit Testing (Enzyme, Jest)</li>
        </ul>
        <h3 className={styles.sub_header}>I also have some experience working with backend, using next technologies:</h3>
        <ul>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Websockets</li>
          <li>REST api (Express, Strongloop Loopback REST api)</li>
          <li>Stripe Payments</li>
        </ul>
        <h3 className={styles.sub_header}>In a backend field Im learning and getting better at next technologues:</h3>
        <ul>
          <li>Cloud services (Heroku, AWS)</li>
          <li>Working with Big Data</li>
          <li>CRON jobs</li>
          <li>Node.js in depth</li>
        </ul>
      </div>
    )
  }
}