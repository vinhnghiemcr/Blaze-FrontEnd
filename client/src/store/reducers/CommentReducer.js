const {
  CLEAR_COMMENT_CONTENT,
  UPDATE_COMMENT_CONTENT,
  SET_POST_COMMENTS
} = require('../types')

const iState = {
  comments: [],
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
    case SET_POST_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return { ...state }
  }
}

export default CommentReducer
