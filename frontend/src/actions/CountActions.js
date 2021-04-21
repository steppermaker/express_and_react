export function fetching() {
  return {
    type: 'FETCHING_COUNT'
  };
}

export function getCount() {
  return {
    type: 'GET_COUNT'
  };
}

export function increment() {
  return {
    type: 'INCREMENT'
  };
}

export function decrement() {
  return {
    type: 'DECREMENT'
  };
}

export function setCount(payload) {
  return {
    type: 'SET_COUNT',
    payload
  };
}

export function setError(error) {
  return {
    type: 'SET_COUNT_ERROR',
    payload: { error } 
  };
}

export function countINC(payload) {
  return {
    type: 'COUNT_INC',
    payload
  };
}

export function countDEC(payload) {
  return {
    type: 'COUNT_DEC',
    payload
  };
}