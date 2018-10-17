import * as React from 'react'

import InputRange from 'app/components/InputRange/InputRange'
import SubHeader from 'app/components/SubHeader/SubHeader'
import Chart from 'app/components/Chart/Chart'

import * as styles from './dashboard.scss'

export default class Dashboard extends React.Component {
  render(): React.ReactElement<{}> {
    return (
      <div style={{ width: '100%' }}>
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
        <Chart />
      </div>
    )
  }
}