const { GET_STATES } = require('../types')

const iState = {
  states: []
}

const StateReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_STATES:
      return { ...state, states: [...action.payload] }
    default:
      return { ...state }
  }
}

export default StateReducer