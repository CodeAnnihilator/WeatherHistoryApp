import * as React from 'react'

import InputRange from 'app/common/components/InputRange/InputRange'

import * as styles from './dataRangeScroll.scss'

interface IDataRangeScrollProps {
  minValue: number
  maxValue: number
  currentMinValue: number
  currentMaxValue: number
  handleChange: Function
}

interface IDataRangeScrollState {
  currentMinValue: number
  currentMaxValue: number
}

export default class DataRangeScroll extends React.Component<IDataRangeScrollProps, IDataRangeScrollState> {

  constructor(props: IDataRangeScrollProps){
    super(props)
    this.state = {
      currentMinValue: props.currentMinValue,
      currentMaxValue: props.currentMaxValue
    }
  }

  handleChange = ({ min, max }) => {
    const { minValue, maxValue } = this.props
    const nextMin = min >= minValue ? min : minValue
    const nextMax = max <= maxValue ? max : maxValue
    this.setState({
      currentMinValue: nextMin,
      currentMaxValue: nextMax
    })  
  }
  handleCompleteChange = values => this.props.handleChange(values)

  render(): React.ReactElement<{}> {
    const { currentMinValue, currentMaxValue } = this.state
    const { minValue, maxValue } = this.props
    return (
      <div className={styles.inputRangeWrapper}>
        <InputRange
          draggableTrack
          minValue={minValue}
          maxValue={maxValue}
          value={{
            min: currentMinValue,
            max: currentMaxValue
          }}
          onChange={this.handleChange}
          onChangeComplete={this.handleCompleteChange}
        />
      </div>
    )
  }
}