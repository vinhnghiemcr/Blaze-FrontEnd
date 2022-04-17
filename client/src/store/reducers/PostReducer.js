const { GET_POST, POST_POST, REMOVE_POST, UPDATE_POST } = require('../types')

const iState = {
  post: {},
  newPost: {
    title: '',
    content: '',
    img: ''
  }
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, post: [...action.payload] }
    case POST_POST:
      return { ...state, newPost: action.payload }
    case REMOVE_POST:
      return { ...state }
    case UPDATE_POST:
      return { ...state, newPost: { ...state.newPost, ...action.payload } }
    default:
      return { ...state }
  }
}

export default TrailReducer
