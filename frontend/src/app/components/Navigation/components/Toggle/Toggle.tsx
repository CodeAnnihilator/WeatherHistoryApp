import * as React from 'react'
import cn from 'classnames'

import * as styles from './toggle.scss'

interface IToggleProps {
  isExpanded: boolean
  onToggle: () => void
}


const Toggle: React.SFC<IToggleProps> = (props) => {
  const { isExpanded, onToggle } = props
  return (
    <div className={styles.wrapper} onClick={onToggle}>
      <div className={cn(styles.menuToggle, {[styles.opened]: isExpanded})}>
        <svg className={cn(styles.icon, styles.iconMenuToggle)} x='0px' y='0px' viewBox='0 0 100 100'>
          <g className={styles.svgMenuToggle}>
            <path className={cn(styles.line, styles.line1)} d='M5 13h90v14H5z'/>
            <path className={cn(styles.line, styles.line2)} d='M5 43h90v14H5z'/>
            <path className={cn(styles.line, styles.line3)} d='M5 73h90v14H5z'/>
          </g>
        </svg>
      </div>
      { isExpanded && <div className={styles.text}>navigation</div> }
    </div>
  )
}

export default Toggle