import * as types from "../types"
import * as services from '../../service/State'

//Get all States in DB
export const LoadStates =  () => {
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