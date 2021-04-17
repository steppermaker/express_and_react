const initialState = {
  messages: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function messageReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MESSAGES': {
      return {...state, fetching: true};
    }
    case 'FETCH_MESSAGES_REJECTED': {
      return {...state, fetching: false, error: action.payload};
    }
    case 'FETCH_MESSAGES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        messages: action.payload
      };
    }
    case 'FETCH_ADD_MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    case "FETCH_UPDATE_MESSAGE": {
      const { id, message } = action.payload;
      const newMessages = [ ...state.messages ];
      const messageToUpdate = newMessages.findIndex((message) => message.id === id);
      newMessages[messageToUpdate].message = message
      console.log(message)
      return {
        ...state,
        messages: newMessages
      };
    }
    case "FETCH_DELETE_MESSAGE": {
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload.id)
      };
    }
    default: {
      return state
    }
  }
}