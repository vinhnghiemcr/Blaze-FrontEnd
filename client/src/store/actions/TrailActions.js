import * as types from '../types'
import * as services from '../../services/Trail'
import { GetStateAndAllTrails } from '../../services/State'

//get trail by Id
export const GetTrailById = (trailId) => {
  return async (dispatch) => {
    try {
      const trail = await services.GetTrailAndPosts(trailId)
      // Set trail in TrailReducer
      dispatch({
        type: types.SET_TRAIL,
        payload: trail
      })
      // Set posts in PostReducer
      console.log('trail:', trail)
      console.log('trail.posts:', trail.posts)
      dispatch({
        type: types.SET_POSTS,
        payload: trail.posts
      })
    } catch (error) {
      throw error
    }
  }
}

//update new trail form
export const UpdateTrailForm = (data) => ({
  type: types.UPDATE_NEW_TRAIL_FORM,
  payload: data
})

//Create new trail
export const CreateNewTrail = (userId, formValue) => {
  return async (dispatch) => {
    try {
      const trail = await services.CreateTrail(userId, formValue)
      dispatch({
        type: types.CLEAR_TRAIL_FORM,
        payload: {
          name: '',
          img: '',
          location: '',
          difficulty: '',
          length: 0,
          elevationChange: 0,
          routeType: '',
          stateName: ''
        }
      })
    } catch (error) {}
  }
}

export const PopulateTrailForm = (trail) => {
  return async (dispatch) => {
    try {
      const state = await GetStateAndAllTrails(trail.stateId)
      dispatch({
        type: types.POPULATE_TRAIL_FORM,
        payload: {
          name: trail.name,
          img: trail.img,
          location: trail.location,
          difficulty: trail.difficulty,
          length: trail.length,
          elevationChange: trail.elevationChange,
          routeType: trail.routeType,
          stateName: state.name
        }
      })
    } catch (error) {
      throw error
    }
  }
}

export const ToggleShouldUpdateTrail = () => ({
  type: types.TOGGLE_SHOULD_UPDATE_TRAIL
})

// Edit a trail
export const EditTrail = (trailId, userId, formValues) => {
  return async (dispatch) => {
    try {
      delete formValues.stateName
      const trail = await services.UpdateTrailById(trailId, userId, formValues)
      dispatch({
        type: types.CLEAR_TRAIL_FORM,
        payload: {
          name: '',
          img: '',
          location: '',
          difficulty: '',
          length: 0,
          elevationChange: 0,
          routeType: '',
          stateName: ''
        }
      })
      dispatch({
        type: types.EDIT_TRAIL,
        payload: trail
      })
      dispatch({
        type: types.UPDATE_STATE_TRAILS,
        payload: trail
      })
    } catch (error) {
      throw error
    }
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
