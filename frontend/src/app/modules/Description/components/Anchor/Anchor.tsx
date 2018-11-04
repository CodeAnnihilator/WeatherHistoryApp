import * as React from 'react'
import Scroll from 'react-scroll'

// import cn from 'classnames'

import * as styles from './anchor.scss'

interface IAnchorProps {
  icon: string
  desc: string
  containerId: string
  to: string
}

export default class Anchor extends React.Component<IAnchorProps> {

  render(): React.ReactElement<{}> {
    const {
      icon,
      containerId,
      to,
      desc
    } = this.props
    const {
      Link
    } = Scroll
    return (
      <Link to={to} smooth={true} duration={250} containerId={containerId}>
        <div className={styles.anchor}>
          { icon && <img src={icon} className={styles.anchor_img} /> }
          { desc && <span className={styles.anchor_desc}>{ desc }</span> }
        </div>
      </Link>
    )
  }
}