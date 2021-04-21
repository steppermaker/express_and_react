import { put, takeEvery, call,
         fork, take, delay } from 'redux-saga/effects';

import rootSaga, { getCount, increment, decrement } from '../sagas'
import * as countAPI from '../apis/countApi';
import { setCount, countINC,
         countDEC, setError, fetching } from '../actions/CountActions'

describe('rootSaga', () => {

   const saga = rootSaga();

  it('corrent receive', () => {
    expect(
      saga.next().value
    ).toEqual(
      takeEvery('GET_COUNT', getCount)
    )

    expect(
      saga.next().value
    ).toEqual(
      takeEvery('INCREMENT', increment)
    )

    expect(
      saga.next().value
    ).toEqual(
      fork(decrement)
    )
  })
})

describe('getCount', () => {

  const saga = getCount()

  it('correct receive', () => {
    expect(
      saga.next().value
    ).toEqual(
      put(fetching())
    )

    expect(
      saga.next().value
    ).toEqual(
      call(countAPI.getCount)
    )

    expect(
      saga.next({err: "error"}).value
    ).toEqual(
      put(setError("error"))
    )
  })
})
