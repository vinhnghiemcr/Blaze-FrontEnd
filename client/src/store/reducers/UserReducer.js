const types = require('../types')

const iState = {
  user: null,
  authenticated: false,
  loginFormValues: { email: '', password: '' }
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload }
    case types.TOGGLE_AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    case types.UPDATE_LOGIN_FORM_VALUES:
      return {
        ...state,
        loginFormValues: { ...state.loginFormValues, ...action.payload }
      }
    default:
      return { ...state }
  }
}

export default UserReducer
