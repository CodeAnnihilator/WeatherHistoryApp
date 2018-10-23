import * as React from 'react'
import { NavLink } from 'react-router-dom'

import * as styles from './element.scss'

interface IElementProps {
  img: any
  text: string,
  linkTo: string,
  isExpanded: boolean
}

const Element: React.SFC<IElementProps> = (props) => {
  const { linkTo, img, text, isExpanded } = props
  return (
    <NavLink to={linkTo} className={styles.wrapper} activeClassName={styles.active}>
      <img className={styles.img} src={img} />
      { text && isExpanded && <div className={styles.text}>{text}</div> }
    </NavLink>
  )
}

export default Element