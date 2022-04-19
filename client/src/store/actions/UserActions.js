import * as types from '../types'
import * as services from '../../services/User'

// Set user
export const SetUser = (user) => ({
  type: types.SET_USER,
  payload: user
})

// Toggle authenticated
export const ToggleAuthenticated = (value) => ({
  type: types.TOGGLE_AUTHENTICATED,
  payload: value
})

// Update the login form values
export const UpdateLoginFormValues = (data) => ({
  type: types.UPDATE_LOGIN_FORM_VALUES,
  payload: data
})

// Update the sign up form values
export const UpdateSignUpFormValues = (data) => ({
  type: types.UPDATE_SIGNUP_FORM_VALUES,
  payload: data
})

// Get user all Posts
export const GetUserPosts = (userId) => {
  return async (dispatch) => {
    try {
      const posts = await services.GetPostofUser(userId)
      console.log('posts: ', posts)
      dispatch({
        type: types.SET_USER_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

// Toggle creating post
export const ToggleCreatingPost = (value) => ({
  type: types.TOGGLE_CREATING_POST,
  payload: value
})

// Toggle creating trail
export const ToggleCreatingTrail = (value) => ({
  type: types.TOGGLE_CREATING_TRAIL,
  payload: value
})

export const DeleteUserById = (userId, passwordBody) => {
  return async () => {
    try {
      const user = await services.DeleteUser(userId, passwordBody)
    } catch (error) {
      throw error
    }
  }
}
