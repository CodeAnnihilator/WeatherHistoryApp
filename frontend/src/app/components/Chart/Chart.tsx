import * as React from 'react'
import * as d3 from 'd3'
import cn from 'classnames'

import drawChart from './d3/drawChart'
import updateChart from './d3/updateChart'

import * as styles from './chart.scss'

interface IDashboardProps {
  width: number
  data: string[]
}

export default class Chart extends React.Component<IDashboardProps> {

  public refs: {
    chart: HTMLInputElement
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps
    const root = d3.select(this.refs.chart)
    const shouldUpdate = nextProps.width !== this.props.width && data.length > 0
    updateChart(root, data, shouldUpdate)
  }

  componentDidMount() {
    const { data } = this.props
    const root = d3.select(this.refs.chart)
    drawChart(root, data)
  }

  render() {
    return (
      <div>
        <div className={cn(styles.lineChart, styles.tooltip)} style={{ opacity: 0, top: 0 }} />
        <svg ref='chart' width={this.props.width} style={{ width: '100%' }}></svg>
      </div>
    )
  }
}