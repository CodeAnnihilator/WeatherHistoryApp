import * as React from 'react'
import cn from 'classnames'

import Element from './components/Element/Element'
import Toggle from './components/Toggle/Toggle'

import * as styles from './navigation.scss'

import barChart from 'app/assets/bar_chart.svg'
import devInfo from 'app/assets/dev_info.svg'
import aboutMe from 'app/assets/about_me.svg'

interface INavigationState {
  isExpanded: boolean
}

export default class Navigation extends React.Component<{}, INavigationState> {

  constructor(props: any) {
    super(props)
    this.state = {
      isExpanded: true
    }
  }

  onToggle = () => this.setState({ isExpanded: !this.state.isExpanded })

  render() {
    const { isExpanded } = this.state
    return (
      <div className={cn(styles.wrapper, {[styles.collapsed]: !isExpanded})}>
        <Toggle isExpanded={isExpanded} onToggle={this.onToggle} />
        <Element isExpanded={isExpanded} linkTo='/dash' img={barChart} text='dashboard'/>
        <Element isExpanded={isExpanded} linkTo='/dev_info' img={devInfo} text='app/dev info'/>
        <Element isExpanded={isExpanded} linkTo='/about' img={aboutMe} text='about me'/>
      </div>
    )
  }
}