import * as d3 from 'd3'
import cn from 'classnames'
import * as styles from '../chart.scss'

import initialProperties from './initialProperties'
import { drawOnMouseOver, clearOnMouseOut } from './mouseEvents'

export default function d3ResizeChart(root, data, shouldUpdate) {
  const values = initialProperties(root, data)
  const { width, xAxis, yAxis, line, x, y, barWidth, height, margin } = values

  root.attr('width', width)

  const chart = root.select('g')

  chart
    .selectAll(`.${styles.line}`)
    .selectAll('path')
    .each(function(d) {
      if (!shouldUpdate) {
        d3.select(this)
          .transition()
          .attr('d', line(data))
      } else {
        d3.select(this)
          .attr('d', line(data))
      }
    })

  chart
    .selectAll(`.${styles.overlay}`)
    .selectAll('path')
    .each(function(d) {
      const lineValues = line(data).slice(1);
      const splitedValues = lineValues.split(',')
      const attrD = `M0,${height - 50},${lineValues},l0,${(height -50) - splitedValues[splitedValues.length - 1]}`
      if (!shouldUpdate) {
        d3.select(this)
          .transition()
          .attr('d', attrD)
      } else {
        d3.select(this)
          .attr('d', attrD)
      }
    })

  chart
    .selectAll(`.${styles.xAxis}`)
    .call(xAxis)

  chart
    .selectAll(`.${styles.yAxis}`)
    .transition()
    .call(yAxis)

  const circle = chart
    .selectAll('circle')
    .data(data)

  circle
    .attr('cx', (d, i) => x(new Date(d.key.replace("-", "/"))))
    .attr('cy', (d, i) => y(d.value))
    .exit()
    .remove()

  circle
    .enter()
    .append('circle')
    .attr('id', (d, i) => ('dot-' + i))
    .attr('cx', (d, i) => x(new Date(d.key.replace("-", "/"))))
    .attr('cy', (d, i) => y(d.value))
    .attr('r', 4)
    .style('opacity', 0)

  const hoverLine = chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .data(data)

  hoverLine
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - 2 / 2))
    .attr('y', (d, i) => (y(d.value) + 3))
    .exit()
    .remove()

  hoverLine
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('width', 2)
    .attr('class', cn(styles.lineChart, styles.hoverLine))
    .attr('id', (d, i) => ('line-' + i))
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - 2 / 2))
    .attr('y', (d, i) => (y(d.value) + 3))

  const hoverBox = chart
    .selectAll(`.${cn(styles.hoverBox)}`)
    .data(data)

  hoverBox
    .attr('width', barWidth)
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - barWidth / 2))
    .attr('y', (d, i) => y(d.value))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i))
    .exit()
    .remove()

  hoverBox
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('class', cn(styles.lineChart, styles.hoverBox))
    .attr('width', barWidth)
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - barWidth / 2))
    .attr('y', (d, i) => y(d.value))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i))
}