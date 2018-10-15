import * as React from 'react'

import thermometerImg from 'app/assets/thermometer.svg'

import * as styles from './header.scss'

const Element: React.SFC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={thermometerImg} />
      <div className={styles.title}>Weather History Service</div>
    </div>
  )
}

export default Element