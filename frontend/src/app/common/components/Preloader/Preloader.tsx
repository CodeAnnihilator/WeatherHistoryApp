import * as React from 'react'

import * as styles from './preloader.scss'

export default class Preloader extends React.Component<{}> {

  render(): React.ReactElement<{}> {
    return (
      <div id={styles.preloader}>
        <div id={styles.loader} />
      </div>
    )
  }
}