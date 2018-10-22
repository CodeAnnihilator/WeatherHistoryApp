import * as React from 'react'
import cn from 'classnames'

import * as styles from './buttonSwitcher.scss'

interface IButtonSwitcherProps {
  onSwitch: Function
  activeSwitch: string
  currentTab: string
}

const ButtonSwitcher: React.SFC<IButtonSwitcherProps> = (props) => {
  const {
    currentTab,
    onSwitch
  } = props
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.text, {[styles.active]: currentTab === 'temperature'})}
        onClick={() => currentTab !== 'temperature' ? onSwitch('temperature') : undefined}
      >temperature</div>
      <div
        className={cn(styles.text, {[styles.active]: currentTab === 'precipitation'})}
        onClick={() => currentTab !== 'precipitation' ? onSwitch('precipitation') : undefined}
      >precipitation</div>
      test
    </div>
  )
}

export default ButtonSwitcher