export function fetchMessages() {
  return function(dispatch) {
    dispatch({type: 'FETCH_MESSAGES'});
    fetch('/api/v1/redux-list')
    .then((res) => res.json())
    .then((data) => {
      dispatch({type:'FETCH_MESSAGES_FULFILLED', payload: data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  }
}

export function fetchAddMessage(value) {
  return function(dispatch) {
    dispatch({type: 'FETCH_MESSAGES'});
    fetch('/api/v1/redux-add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value)
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type:'FETCH_ADD_MESSAGE', payload: data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  }
}

export function fetchDeleteMessage(id) {
  return function(dispatch) {
    dispatch({type: 'FETCH_MESSAGES'});
    fetch(`/api/v1/redux-item/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type:'FETCH_DELETE_MESSAGE', payload: data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  }
}

export function fetchUpdateMessage({id, message}) {
  return function(dispatch) {
    dispatch({type: 'FETCH_MESSAGES'});
    fetch(`/api/v1/redux-item/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message })
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type:'FETCH_UPDATE_MESSAGE', payload: data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  }
}
