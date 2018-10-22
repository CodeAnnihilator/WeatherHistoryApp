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
    // console.log(nextProps)
    const { data } = nextProps
    const root = d3.select(this.refs.chart)
    // if (nextProps.width !== this.props.width) {
    // }
    const isWidthChanged = nextProps.width !== this.props.width
    updateChart(root, data, styles, isWidthChanged)
  }

  componentDidMount() {
    const { data } = this.props
    const root = d3.select(this.refs.chart)
    drawChart(root, data, styles)
    window.addEventListener('resize', () => updateChart(root, data, styles, false))
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