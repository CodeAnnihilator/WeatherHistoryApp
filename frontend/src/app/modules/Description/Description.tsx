import * as React from 'react'

import AnchorLinks from './components/AnchorLinks/AnchorLinks'
import DescriptionText from './components/DescriptionText/DescriptionText'

import * as styles from './description.scss'

export default class Description extends React.Component<null> {

  render(): React.ReactElement<{}> {

    return (
      <div className={styles.container}>
        <AnchorLinks />
        <DescriptionText />
      </div>
    )
  }
}