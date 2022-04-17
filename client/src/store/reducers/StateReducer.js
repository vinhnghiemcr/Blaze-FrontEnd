const { GET_STATES, GET_STATE_DETAILS } = require('../types')

const iState = {
  states: [],
  state: {},
  trails: []
}

const StateReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_STATES:
      return { ...state, states: [...action.payload] }
    case GET_STATE_DETAILS:
      return { ...state, state: action.payload, trails: action.payload.trails }
    default:
      return { ...state }
  }
}

export default StateReducer
