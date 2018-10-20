import { takeLatest, call, put } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'
import { fromJS } from 'immutable'

import { actionTypes as at } from '../constants/entities'

import { requestTemperatureSuccess } from 'app/common/actions/entities'
import { setInitialValues } from 'app/common/actions/selection'

import { requestTemperature } from 'app/api/temperature'

function* requestTemperatureSaga() {
  try {
    const { data } = yield call(requestTemperature)
    const temperature = fromJS(data)
    const minDateYear = temperature.getIn([0, 't']).slice(0, 4)
    const maxDateYear = temperature.getIn([temperature.size - 1, 't']).slice(0, 4)
    yield put(batchActions([
      requestTemperatureSuccess(temperature),
      setInitialValues({
        minValue: parseInt(minDateYear, 10),
        maxValue: parseInt(maxDateYear, 10),
        currentMinValue: parseInt(minDateYear, 10),
        currentMaxValue: parseInt(maxDateYear, 10)
      })
    ]))
  } catch(err) {
    console.log(err)
  }
}

export default function* watchRequestEntities() {
  yield takeLatest(at.REQUEST_TEMPERATURE, requestTemperatureSaga)
}
