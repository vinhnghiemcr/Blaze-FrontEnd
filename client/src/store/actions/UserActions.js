import * as types from "../types";

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


