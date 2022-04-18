import * as types from '../types'
import * as services from '../../services/Post'

//get post by id
export const GetPostByTrailId = (trailId) => {
  return async (dispatch) => {
    try {
      const posts = await services.GetPostofTrail(trailId)
      dispatch({
        type: types.GET_POSTS,
        payload: posts
      })
    } catch (error) {}
  }
}

//update new post
export const UpdateNewPostValue = (data) => ({
  type: types.UPDATE_NEW_POST_VALUE,
  payload: data
})

//create new post
export const CreateNewPost = (userId, postFormValues) => {
  return async (dispatch) => {
    try {
      const post = await services.CreatePost(userId, postFormValues)
      dispatch({
        type: types.CREATE_POST,
        payload: {
          title: '',
          content: '',
          img: '',
          trailName: ''
        }
      })
    } catch (error) {}
  }
}

//Get all s from following users
export const GetPostsFromFollowingUsers = (userId) => {
  return async (dispatch) => {
    try {
      const posts = await services.GetAllPostsFromFollowingUSers(userId)
      dispatch({
        type: types.GET_POSTS_FROM_FOLLOWING_USER,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}
