import * as d3 from 'd3'
import cn from 'classnames'

export function drawOnMouseOver(root, d, x, y, i, styles) {
  const rootBoundings = root.node().getBoundingClientRect()
  const xtranslate = x(new Date(d.key.replace("-", "/")))
  const rightBoundary = rootBoundings.width + 20
  const positionX = xtranslate + rootBoundings.left - 10 <= rightBoundary
    ? xtranslate + rootBoundings.left - 10
    : rightBoundary
  d3.selectAll(`.${cn(styles.tooltip)}`)
    .style('opacity', 1)
    .style('left', positionX + 'px')
    .style('top', y(d.value) + rootBoundings.top - 58 + 'px')
    .html(`
      <div>
        <span>date: <strong>${d.key.replace("-", "/")}</strong></span>
        <span>value: <strong>${d.value}</strong></span>
      </div>
    `)

  const currentLine = '#line-' + i
  d3.select(currentLine).style('opacity', 1)

  const currentDot = '#dot-' + i
  d3.select(currentDot).style('opacity', 1)

  d3.selectAll(`g[transform = "translate(${xtranslate}, 0)"]`)
    .select('text')
    .style('opacity', 1)
}

export function clearOnMouseOut(d, x, i, styles) {
  const xtranslate = x(new Date(d.key.replace("-", "/")))

  d3.selectAll(`.${cn(styles.tooltip)}`).style('opacity', 0)

  const currentLine = '#line-' + i
  d3.select(currentLine).style('opacity', 0)

  const currentDot = '#dot-' + i
  d3.select(currentDot).style('opacity', 0)

  d3.selectAll(`g[transform = "translate(${xtranslate}, 0)"]`)
    .select('text[style = "text-anchor: middle; opacity: 1;"]')
    .style('opacity', 0)
}