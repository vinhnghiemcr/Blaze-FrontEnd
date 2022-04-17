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
