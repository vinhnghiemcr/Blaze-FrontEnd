const {
  CLEAR_COMMENT_CONTENT,
  UPDATE_COMMENT_CONTENT,
  SET_POST_COMMENTS,
  TOGGLE_VIEW_COMMENTS
} = require('../types')

const iState = {
  comments: [],
  newComment: {
    content: ''
  },
  showComments: false
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
    case TOGGLE_VIEW_COMMENTS:
      return {
        ...state,
        showComments: !state.showComments
      }
    default:
      return { ...state }
  }
}

export default CommentReducer
