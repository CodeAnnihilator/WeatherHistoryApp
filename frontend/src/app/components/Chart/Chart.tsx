import * as React from 'react'
import * as d3 from 'd3'

import { d3DrawChart, d3ResizeChart } from './d3DrawChart'

import * as styles from './chart.scss'

interface IDashboardProps {
  width: number
}

export default class Chart extends React.Component<IDashboardProps> {

  public refs: {
    chart: HTMLInputElement
  }

  componentWillReceiveProps(nextProps) {
    const data = require('./temperature.json')
    const root = d3.select(this.refs.chart)
    d3ResizeChart(root, data.slice(0, 1000), styles)
  }

  componentDidMount() {
    const data = require('./temperature.json')
    const root = d3.select(this.refs.chart)
    d3DrawChart(root, data.slice(0, 1000), styles)
    window.addEventListener('resize', () => d3ResizeChart(root, data.slice(0, 1000), styles))
  }

  render() {
    return <svg ref='chart' width={this.props.width} style={{ width: '100%' }}></svg>
  }
}