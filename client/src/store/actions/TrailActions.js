import * as types from '../types'
import * as services from '../../services/Trail'

//get trail by Id
export const GetTrailById = (trailId) => {
  return async (dispatch) => {
    try {
      const trail = await services.GetTrailAndPosts(trailId)
      dispatch({
        type: types.GET_TRAIL,
        payload: trail
      })
    } catch (error) {}
  }
}

//update new trail form
export const UpdateTrailForm = (data) => ({
  type: types.UPDATE_NEW_TRAIL_FORM,
  payload: data
})

//Create new trail
export const CreateNewTrail = (stateId, userId, formValue) => {
  return async (dispatch) => {
    try {
      const trail = await services.CreateTrail(stateId, userId, formValue)
      dispatch({
        type: types.POST_TRAIL,
        payload: {
          name: '',
          img: '',
          location: '',
          difficulty: '',
          length: 0,
          elevationChange: 0,
          routeType: ''
        }
      })
    } catch (error) {}
  }
}

//delete a trail
export const DeleteTrail = (trailId, userId) => {
  return async () => {
    try {
      const trail = await services.DeleteTrailById(trailId, userId)
    } catch (error) {
      throw error
    }
  }
}
