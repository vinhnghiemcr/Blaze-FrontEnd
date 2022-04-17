const {
  GET_POST,
  CREATE_POST,
  REMOVE_POST,
  UPDATE_NEW_POST_VALUE
} = require('../types')

const iState = {
  post: {},
  newPost: {
    title: '',
    content: '',
    img: '',
    trailName: ''
  }
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, post: [...action.payload] }
    case CREATE_POST:
      return { ...state, newPost: {...action.payload} }
    case REMOVE_POST:
      return { ...state }
    case UPDATE_NEW_POST_VALUE:
      return { ...state, newPost: { ...state.newPost, ...action.payload } }
    default:
      return { ...state }
  }
}

export default PostReducer
