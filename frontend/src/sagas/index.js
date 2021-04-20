import { put, takeEvery, call, fork, take, delay } from 'redux-saga/effects';

import * as countAPI from '../apis/countApi';
import { setCount, countINC,
         countDEC, setError } from '../actions/counts/countAction'

function* getCount(e) {
  const { data, err } = yield call(countAPI.getCount);
  if (data && !err) {
    yield put(setCount(data))
  } else {
    yield put(setError(err))
  }
}

function* increment(e) {
  console.log(e)
  const { data, err } = yield call(countAPI.countIncrement);
  if (data && !err) {
    yield put(countINC(data));
  } else {
    yield put(setError(err));
  }
}

function* decrement() {
  while (true) {
    yield take("DECREMENT");
    yield delay(1000)
    const { data, err } = yield call(countAPI.countDecrement);
    if (data && !err) {
      yield put(countDEC(data));
    } else {
      yield put(setError(err));
    }
  }
}

export default function* rootSaga() {
  yield takeEvery('GET_COUNT', getCount)
  yield takeEvery('INCREMENT', increment);
  yield fork(decrement);
}