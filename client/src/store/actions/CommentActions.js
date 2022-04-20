import * as types from '../types'
import * as services from '../../services/Comment'

// Create new comment
export const CreateNewComment = (userId, postId, commentFormValues) => {
  return async (dispatch) => {
    try {
      const comment = await services.CreateComment(
        userId,
        postId,
        commentFormValues
      )
      // dispatch({
      //   type: types.CLEAR_COMMENT_CONTENT
      // })
    } catch (error) {
      throw error
    }
  }
}

// Updates new comment content
export const UpdateNewCommentContent = (data) => ({
  type: types.UPDATE_COMMENT_CONTENT,
  payload: data
})

export const GetPostComments = (postId) => {
  return async (dispatch) => {
    try {
      const comments = await services.GetPostComments(postId)
      dispatch({
        type: types.SET_POST_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const ToggleViewComments = () => {
  return { type: types.TOGGLE_VIEW_COMMENTS }
}
