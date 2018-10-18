import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import InputRange from 'app/components/InputRange/InputRange'
import SubHeader from 'app/components/SubHeader/SubHeader'
import Chart from 'app/components/Chart/Chart'

import * as styles from './dashboard.scss'

interface IDashboardState {
  chartWidth: number
  observe: Function
  unobserve: Function
}

export default class Dashboard extends React.Component<{}, IDashboardState> {

  constructor(props: any){
    super(props)
    this.state = {
      chartWidth: null,
      observe: null,
      unobserve: null
    }
  }

  public refs: {
    main: HTMLInputElement
  }

  componentDidMount() {
    const observer = new ResizeObserver(e => this.setState({ chartWidth: e[0].contentRect.width }))
    this.setState({
      observe: () => observer.observe(this.refs.main),
      unobserve: () => observer.unobserve(this.refs.main)
    })
    observer.observe(this.refs.main)
  }

  componentWillUnmount() {
    const { unobserve } = this.state
    unobserve(this.refs.main)
  }

  render(): React.ReactElement<{}> {
    const { chartWidth } = this.state
    return (
      <div ref='main'>
        <SubHeader text='years range' backgroundColor='white'  />
        <div className={styles.inputRangeWrapper}>
          <InputRange
            draggableTrack
            minValue={1978}
            maxValue={2016}
            value={{ min: 1982, max: 2011 }}
            onChange={() => console.log('ddd')}
          />
        </div>
        <SubHeader text='chart' backgroundColor='white' />
        <Chart width={chartWidth} />
      </div>
    )
  }
}