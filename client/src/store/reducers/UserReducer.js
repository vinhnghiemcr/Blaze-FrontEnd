const { SET_USER, TOGGLE_AUTHENTICATED } = require('../types')

const iState = {
  user: null,
  authenticated: false
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    case TOGGLE_AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
