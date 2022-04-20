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
  posts: [],
  creatingPost: false,
  creatingTrail: false,
  passwordBody: {
    password: ''
  },
  deletingUser: false
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload }
    case types.SET_USER_POSTS:
      return { ...state, posts: action.payload }
    case types.TOGGLE_AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    case types.UPDATE_LOGIN_FORM_VALUES:
      return {
        ...state,
        loginFormValues: { ...state.loginFormValues, ...action.payload }
      }
    case types.UPDATE_SIGNUP_FORM_VALUES:
      return {
        ...state,
        signupFormValues: { ...state.signupFormValues, ...action.payload }
      }
    case types.TOGGLE_CREATING_POST:
      return { ...state, creatingPost: action.payload }
    case types.TOGGLE_CREATING_TRAIL:
      return { ...state, creatingTrail: action.payload }
    case types.DELETE_USER:
      return { ...state, user: action.payload }
    case types.TOGGLE_DELETE_USER_PASSWORD_INPUT:
      return { ...state, deletingUser: !state.deletingUser }
    case types.UPDATE_PASSWORD_BODY:
      return {
        ...state,
        passwordBody: {
          ...action.payload
        }
      }
      case types.SET_USER_STATE_TO_DEFAULT:
        return {...state,
          loginFormValues: { email: '', password: '' },
          signupFormValues: {
            name: '',
            trailName: '',
            email: '',
            password: '',
            confirmPassword: ''
          },
          posts: [],
          creatingPost: false,
          creatingTrail: false,
          passwordBody: {
            password: ''
          },
          deletingUser: false 
        }
    default:
      return { ...state }
  }
}

export default UserReducer
