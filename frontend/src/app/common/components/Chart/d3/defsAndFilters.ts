export default function defsAndFilters(root) {
  const defs = root.append('defs')

  const shadow = defs.append('filter')
    .attr('id', 'dropshadow')

  shadow.append('feGaussianBlur')
    .attr('in', 'SourceAlpha')
    .attr('stdDeviation', 4)
    .attr('result', 'blur')
  
  shadow.append('feOffset')
    .attr('in', 'blur')
    .attr('dx', 0)
    .attr('dy', 4)
    .attr('result', 'offsetBlur')
  
  shadow.append('feFlood')
    .attr('in', 'offsetBlur')
    .attr('flood-color', '#438bfb')
    .attr('flood-opacity', '0.7')
    .attr('result', 'offsetColor')
  
  shadow.append('feComposite')
    .attr('in', 'offsetColor')
    .attr('in2', 'offsetBlur')
    .attr('operator', 'in')
    .attr('result', 'offsetBlur')

  const feMerge = shadow.append('feMerge')
  feMerge.append('feMergeNode').attr('in', 'offsetBlur')
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

  const gradient = defs.append('linearGradient')
    .attr('id', 'svgGradient')
    .attr('x1', '0%')
    .attr('x2', '0%')
    .attr('y1', '100%')
    .attr('y2', '0%')

  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#468cfb')
    .attr('stop-opacity', 1)

  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#468cfb')
    .attr('stop-opacity', 1)

  const gradient2 = defs
    .append('linearGradient')
    .attr('id', 'gradient')
    .attr('x1', '0%')
    .attr('y1', '100%')
    .attr('x2', '0%')
    .attr('y2', '0%')

  gradient2
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', 'white')
    .attr('stop-opacity', 1)

  gradient2
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#adccfd')
}