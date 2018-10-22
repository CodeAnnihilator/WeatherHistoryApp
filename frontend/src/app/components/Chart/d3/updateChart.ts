import * as d3 from 'd3'
import cn from 'classnames'

import initialProperties from './initialProperties'
import { drawOnMouseOver, clearOnMouseOut } from './mouseEvents'

export default function d3ResizeChart(root, data, styles, isWidthChanged) {
  const values = initialProperties(root, data)
  const { width, xAxis, yAxis, line, x, y, barWidth, height, margin } = values

  root.attr('width', width)

  const chart = root.selectAll('g')

  chart
    .selectAll(`.${styles.line}`)
    .selectAll('path')
    .each(function(d) {
      if (!isWidthChanged) {
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
      if (!isWidthChanged) {
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

  chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .remove()

  chart
    .selectAll(`.${cn(styles.hoverBox)}`)
    .remove()

  chart
    .selectAll('circle')
    .data(data)
    .attr('cx', (d, i) => x(new Date(d.key.replace("-", "/"))))
    .attr('cy', (d, i) => y(d.value))

  chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .data(data)
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - 2 / 2))
    .attr('y', (d, i) => (y(d.value) + 3))

  chart
    .selectAll(`.${cn(styles.hoverLine)}`)
    .data(data)
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('width', 2)
    .attr('class', cn(styles.lineChart, styles.hoverLine))
    .attr('id', (d, i) => ('line-' + i))
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - 2 / 2))
    .attr('y', (d, i) => (y(d.value) + 3))

  chart
    .selectAll(`.${cn(styles.hoverBox)}`)
    .data(data)
    .enter()
    .append('rect')
    .style('opacity', 0)
    .attr('class', cn(styles.lineChart, styles.hoverBox))
    .attr('width', barWidth)
    .attr('height', (d) => (height - y(d.value) - margin.top - margin.bottom))
    .attr('x', (d, i) => (x(new Date(d.key.replace("-", "/"))) - barWidth / 2))
    .attr('y', (d, i) => y(d.value))
    .on('mouseover', (d, i) => drawOnMouseOver(root, d, x, y, i, styles))
    .on('mouseout', (d, i) => clearOnMouseOut(d, x, i, styles))
}