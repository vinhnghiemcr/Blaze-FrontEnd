const { GET_POSTS } = require('../types')

const iState = {
  postss: []
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: [...action.payload] }
    default:
      return { ...state }
  }
}

export default TrailReducer
