import * as React from 'react'

import InputRange from 'app/components/InputRange/InputRange'

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

  handleChange = values => this.setState({
    currentMinValue: values.min,
    currentMaxValue: values.max
  })

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