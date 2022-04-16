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
