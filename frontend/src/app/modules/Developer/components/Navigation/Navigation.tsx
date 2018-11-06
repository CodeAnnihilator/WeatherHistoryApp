import * as React from 'react'
import { NavLink } from 'react-router-dom'

import * as styles from './navigation.scss'

interface INavigationProps {
  url: string
}

const Navigation: React.SFC<INavigationProps> = ({ url }) => {
  console.log(url)
  return (
    <ul className={styles.nav}>
      <NavLink
        to={`${url}/technologies`}
        activeClassName={styles['nav_el--active']}
        className={styles.nav_el}
      >technologies stack</NavLink>
      <NavLink
        to={`${url}/experience`}
        activeClassName={styles['nav_el--active']}
        className={styles.nav_el}
      >experience & projects</NavLink>
      <NavLink
        to={`${url}/contacts`}
        activeClassName={styles['nav_el--active']}
        className={styles.nav_el}
      >contacts & links</NavLink>
    </ul>
  )
}

export default Navigation