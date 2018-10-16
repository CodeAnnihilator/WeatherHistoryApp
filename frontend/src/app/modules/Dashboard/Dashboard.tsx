import * as React from 'react'

import InputRange from 'app/components/InputRange/InputRange'
import SubHeader from 'app/components/SubHeader/SubHeader'

import * as styles from './dashboard.scss'

export default class Dashboard extends React.Component {
  render(): React.ReactElement<{}> {
    return (
      <div>
        <SubHeader text='years range' backgroundColor='#eaeaea' />
        <div className={styles.inputRangeWrapper}>
          <InputRange
            draggableTrack
            minValue={1978}
            maxValue={2016}
            value={{ min: 1982, max: 2011 }}
            onChange={() => console.log('ddd')}
          />
        </div>
      </div>
    )
  }
}