import * as React from 'react'
import InputRange, { InputRangeProps } from 'react-input-range'
import cn from 'classnames'

import * as styles from './inputRange.css'

export default class InputRangeHOC extends React.PureComponent<InputRangeProps> {
  render() {
    const classNames = {
      activeTrack: cn(styles.inputRangeTrack, styles.inputRangeTrackActive),
      disabledInputRange: cn(styles.inputRange, styles.inputRangeDisabled),
      inputRange: styles.inputRange,
      labelContainer: styles.inputRangeLabelContainer,
      maxLabel: cn(styles.inputRangeLabel, styles.inputRangeLabelMax),
      minLabel: cn(styles.inputRangeLabel, styles.inputRangeLabelMin),
      slider: styles.inputRangeSlider,
      sliderContainer: styles.inputRangeSliderContainer,
      track: cn(styles.inputRangeTrack, styles.inputRangeTrackBackground),
      valueLabel: cn(styles.inputRangeLabel, styles.inputRangeLabelValue)
    }
    return (
      <InputRange {...this.props } classNames={classNames} />
    )
  }
}