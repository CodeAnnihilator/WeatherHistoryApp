import * as React from 'react'
import * as d3 from 'd3'

import { d3DrawChart, d3ResizeChart } from './d3DrawChart'

import * as styles from './chart.scss'

export default class Chart extends React.Component<{}> {

  public refs: {
    chart: HTMLInputElement
  }

  componentDidMount() {
    const data = require('./temperature.json')
    const root = d3.select(this.refs.chart)
    d3DrawChart(root, data.slice(0, 1000), styles)
    window.addEventListener('resize', () => d3ResizeChart(root, data.slice(0, 1000), styles))
  }

  render() {
    return <svg ref='chart' style={{ width: '100%' }}></svg>
  }
}