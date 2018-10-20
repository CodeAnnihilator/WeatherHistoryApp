import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { List } from 'immutable'

import InputRange from 'app/components/InputRange/InputRange'
import SubHeader from 'app/components/SubHeader/SubHeader'
import Chart from 'app/components/Chart/Chart'

import * as styles from './dashboard.scss'

interface IDashboardProps {
  requestTemperature: Function,
  temperature: List<string>,
  isDataLoaded: boolean
}

interface IDashboardState {
  chartWidth: number
  observe: Function
  unobserve: Function
}

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

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

  componentWillMount() {
    if (!this.props.isDataLoaded) {
      this.props.requestTemperature()
    }
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
    const { temperature } = this.props
    return (
      <div ref='main'>
        <SubHeader text='years range' backgroundColor='white'  />
        { temperature.size === 0 && 'Loading data...' }
        {
          temperature.size !== 0 && (
            <div>
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
              <div>
                  <div>button 1</div>
                  <div>button 2</div>
              </div>
              <Chart width={chartWidth} />
            </div>
          )
        }
      </div>
    )
  }
}