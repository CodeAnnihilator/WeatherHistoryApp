import cn from 'classnames'
import * as styles from '../chart.scss'

import initialProperties from './initialProperties'
import { drawOnMouseOver, clearOnMouseOut } from './mouseEvents'
import defsAndFilters from './defsAndFilters'

export default function drawChart(root, data) {
  const values = initialProperties(root, data)
  const { width, height, margin, xAxis, yAxis, line, x, y, barWidth } = values

  defsAndFilters(root)

  const chart = root
    .attr('class', styles.lineChart)
    .attr('width', width)
    .attr('height', height )
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

  chart
    .append('g')
    .attr('class', styles.overlay)
    .selectAll('path')
    .data([data])
    .enter()
    .append('path')
    .attr('d', d => {
      const lineValues = line(d).slice(1);
      const splitedValues = lineValues.split(',')
      return `M0,${height - 50},${lineValues},l0,${(height -50) - splitedValues[splitedValues.length - 1]}`
    })
    .style('fill', 'url(#gradient)')

  chart
    .append('g')
    .attr('class', styles.xAxis)
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
    .call(xAxis)

  chart
    .append('g')
    .attr('class', styles.yAxis).attr('transform', 'translate(0,0)')
    .call(yAxis)

  chart.append('g')
    .attr('class', styles.line)
    .selectAll('path')
    .data([data])
    .enter()
    .append('path')
    .attr('d', line)
    .attr("stroke", "url(#svgGradient)")
    .attr("filter", "url(#dropshadow)")

  chart
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('id', (d, i) => ('dot-' + i))
    .attr('cx', (d, i) => x(new Date(d.key.replace("-", "/"))))
    .attr('cy', (d, i) => y(d.value))
    .attr('r', 4)
    .style('opacity', 0)

  chart
    .selectAll('rect.hover-line')
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
    .selectAll('rect.hover-box')
    .data(data)
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