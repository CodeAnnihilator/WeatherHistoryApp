import * as React from 'react'
import cn from 'classnames'

import * as styles from './chartFilters.scss'

interface IChartFiltersProps {
  currentTab: string
  aggregation: string
  isDetailed: boolean
  isDetailedAvailable: boolean
  switchAggregation: Function
  toggleIsDetailed: Function
}

const ChartFilters: React.SFC<IChartFiltersProps> = (props) => {
  const {
    currentTab,
    aggregation,
    isDetailed,
    isDetailedAvailable,
    switchAggregation,
    toggleIsDetailed
  } = props
  return (
    <div className={styles.wrapper}>
      {
        currentTab === 'temperature' && (
          <div className={styles.block}>
            <span>values: </span>
            <span
              className={cn(styles.value, {[styles['value--active']]: aggregation === 'min'})}
              onClick={() => aggregation !== 'min' ? switchAggregation('min') : undefined}
            >min</span>
            <span> / </span>
            <span
              className={cn(styles.value, {[styles['value--active']]: aggregation === 'max'})}
              onClick={() => aggregation !== 'max' ? switchAggregation('max') : undefined}
            >max</span>
            <span> / </span>
            <span
              className={cn(styles.value, {[styles['value--active']]: aggregation === 'avg'})}
              onClick={() => aggregation !== 'avg' ? switchAggregation('avg') : undefined}
            >avg</span>
          </div>
        )
      }
      {
        currentTab === 'precipitation' && (
          <div className={styles.block}>
            <span>values: </span>
            <span className={cn(styles.value, styles['value--active'])}>total</span>
          </div>
        )
      }
      {
        isDetailedAvailable && (
          <div className={styles.block}>
            <span>detailed: </span>
            <span
              className={cn(styles.value, {[styles['value--active']]: isDetailed})}
              onClick={() => toggleIsDetailed()}
            >{ isDetailed ? 'enable' : 'enable' }</span>
          </div>
        )
      }
    </div>
  )
}

export default ChartFilters