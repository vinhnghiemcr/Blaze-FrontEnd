import * as types from '../types'
import * as services from '../../services/State'

//Get all States in DB
export const LoadStates = () => {
  return async (dispatch) => {
    try {
      const states = await services.GetAllStates()
      dispatch({
        type: types.GET_STATES,
        payload: states
      })
    } catch (error) {
      throw error
    }
  }
}
// Get details about the state and each trail that belongs to it
export const GetStateDetails = (stateId) => {
  return async (dispatch) => {
    try {
      const state = await services.GetStateAndAllTrails(stateId)
      dispatch({
        type: types.GET_STATE_DETAILS,
        payload: state
      })
    } catch (error) {
      throw error
    }
  }
}
