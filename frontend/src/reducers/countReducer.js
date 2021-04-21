export const initialState = {
  count: "",
  fetching: false,
  fetched: false,
  error: null
}

export default function countReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCHING_COUNT' : {
      return { 
        ...state,
        fetching: true,
        fetched: false,
        error: null
       };
    }
    case 'SET_COUNT_ERROR': {
      return {
        ...state,
        error: action.payload.error,
        fetching: false,
        fetched: false
      };
    }
    case 'SET_COUNT': {
      return { 
        ...state,
        count: action.payload.count,
        fetching: false,
        fetched: true 
      };
    }
    case 'COUNT_INC': {
      return {
        ...state,
        count: action.payload.count,
        fetching: false,
        fetched: true
      };
    }
    case 'COUNT_DEC': {
      return {
        ...state,
        count: action.payload.count,
        fetching: false,
        fetched: true
      };
    }
    default: {
      return state
    }
  }
}