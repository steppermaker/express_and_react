export function getCount() {
  return function(dispatch) {
    dispatch({type: 'GET_COUNT'});
  }
}

export function increment() {
  return function(dispatch) {
    dispatch({type: 'INCREMENT'});
  }
}

export function decrement() {
  return function(dispatch) {
    dispatch({type: 'FETCHING'});
    dispatch({type: 'DECREMENT'});
  }
}

export function setCount(payload) {
  return function(dispatch) {
    dispatch({ type: 'SET_COUNT', payload });
  }
}

export function countINC(payload) {
  return function(dispatch) {
    dispatch({ type: 'COUNT_INC', payload });
  }
}

export function countDEC(payload) {
  return function(dispatch) {
    dispatch({ type: 'COUNT_DEC', payload });
  }
}

export function setError(error) {
  return function(dispatch) {
    dispatch({ type: 'ERROR', error })
  }
}