import messageReducer,
       {initialState as messageState} from '../reducers/messagesReducer';
import countReducer,
       {initialState as countState} from '../reducers/countReducer';
import * as messageActions from '../actions/MessageActions'
import * as countActions from '../actions/CountActions'

const message = {id: 1, message: "test"}

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(messageReducer(undefined, {})).toEqual(
      messageState
    )
  })

  it('should handle FETCH_MESSAGE', () => {
    expect(
      messageReducer(undefined, {type: 'FETCH_MESSAGES'})
    ).toEqual(
      {
        ...messageState,
        fetching: true
      }
    )
  })

  
  it('should handle ', () => {
    expect(
      messageReducer(undefined, {
        type:'FETCH_MESSAGES_FULFILLED', payload: [message]
      })
    ).toEqual(
      {
        ...messageState,
        fetched: true,
        messages: [message]
      }
    )
  })

  
  it('should handle FETCH_MESSAGE_REJECTED', () => {
    expect(
      messageReducer(undefined, {
        type: 'FETCH_MESSAGES_REJECTED', payload: {error: "error"}}
        )
    ).toEqual(
      {
        ...messageState,
        error: {error: "error"}
      }
    )
  })

  
  it('should handle FETCH_ADD_MESSAGE', () => {
    expect(
      messageReducer(undefined, {
        type:'FETCH_ADD_MESSAGE', payload: message
      })
    ).toEqual(
      {
        ...messageState,
        messages: [...messageState.messages, message]
      }
    )
  })

  it('should handle FETCH_DELETE_MESSAGE', () => {
    expect(
      messageReducer({
        ...messageState,
        messages: [message]
      },
      {
        type:'FETCH_DELETE_MESSAGE', payload: {id: 1}
      })
    ).toEqual(
      {
        ...messageState,
        messages: []
      }
    )
  })

  it('should handle FETCH_UPDATE_MESSAGE', () => {
    expect(
      messageReducer({
        ...messageState,
        messages: [message]
      }, 
      {
        type:'FETCH_UPDATE_MESSAGE', payload: {id: 1, message: "update"}
      })
    ).toEqual(
      {
        ...messageState,
        messages: [{id:1, message: "update"}]
      }
    )
  })
})

describe('count reducer', () => {
  it('should return the initial state', () => {
    expect(
      countReducer(undefined, {})
    ).toEqual(
      countState
    )
  })

  it('should handle FETCHING_COUNT', () => {
    expect(
      countReducer(undefined, { type: 'FETCHING_COUNT' })
    ).toEqual(
      {
        ...countState,
        fetching: true
      }
    )
  })

  it('should handle SET_COUNT', () => {
    expect(
      countReducer(undefined, { type: 'SET_COUNT',
                                payload: {count: 1} })
    ).toEqual(
      {
        ...countState,
        fetched: true,
        count: 1
      }
    )
  })

  it('should handle SET_COUNT_ERROR', () => {
    expect(
      countReducer(undefined, { type: 'SET_COUNT_ERROR',
                                payload: { error: 'error'} })
    ).toEqual(
      {
        ...countState,
        error: 'error'
      }
    )
  })

  it('should handle COUNT_INC', () => {
    expect(
      countReducer(undefined, { type: 'COUNT_INC',
                                payload: { count: 2 } })
    ).toEqual(
      {
        ...countState,
        fetched: true,
        count: 2
      }
    )
  })

  it('should handle COUNT_DEC', () => {
    expect(
      countReducer(undefined, { type: 'COUNT_DEC',
                                payload: { count: 0 } })
    ).toEqual(
      {
        ...countState,
        fetched: true,
        count: 0
      }
    )
  })
})