const {
  GET_STATES,
  GET_STATE_DETAILS,
  UPDATE_STATE_TRAILS
} = require('../types')

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
    case UPDATE_STATE_TRAILS:
      return {
        ...state,
        trails: state.trails.map((trail) => {
          if (trail.id === action.payload.id) {
            return action.payload
          } else {
            return trail
          }
        })
      }
    default:
      return { ...state }
  }
}

export default StateReducer
