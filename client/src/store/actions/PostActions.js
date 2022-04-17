import * as types from '../types'
import * as types from '../../services/Post'

//get post by id
export const GetPostById = (trailId) => {
  return async (dispatch) => {
    try {
      const post = await services.GetPostofTrail(trailId)
      dispatch({
        type: types.GET_POST,
        payload: post
      })
    } catch (error) {}
  }
}

//update new post
export const UpdatePost = (data) => ({
  type: types.UPDATE_POST,
  payload: data
})

//create new post
export const CreateNewPost = (userId, postId, postFormValue) => {
  return async (dispatch) => {
    try {
      const post = await services.CreatePost(userId, postId, postFormValue)
      dispatch({
        type: types.POST_POST,
        payload: {
          title: '',
          content: '',
          img: ''
        }
      })
    } catch (error) {}
  }
}
