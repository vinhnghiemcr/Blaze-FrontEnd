const types = require('../types')

const iState = {
  user: null,
  authenticated: false,
  loginFormValues: { email: '', password: '' },
  signupFormValues: {
    name: '',
    trailName: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  posts: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload }
    case types.SET_USER_POSTS:
      return {...state, posts: action.payload}
    case types.TOGGLE_AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    case types.UPDATE_LOGIN_FORM_VALUES:
      return {
        ...state,
        loginFormValues: { ...state.loginFormValues, ...action.payload }
      }
    case types.UPDATE_SIGNUP_FORM_VALUES:
      return {...state, signupFormValues: {...state.signupFormValues, ...action.payload}}
    default:
      return { ...state }
  }
}

export default UserReducer
