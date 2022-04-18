const { CLEAR_COMMENT_CONTENT, UPDATE_COMMENT_CONTENT } = require('../types')

const iState = {
  newComment: {
    content: ''
  }
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case CLEAR_COMMENT_CONTENT:
      return { ...state, newComment: { content: '' } }
    case UPDATE_COMMENT_CONTENT:
      return {
        ...state,
        newComment: { ...action.payload }
      }
    default:
      return { ...state }
  }
}

export default CommentReducer
