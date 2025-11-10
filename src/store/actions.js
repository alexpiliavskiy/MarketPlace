export const ADD_CURRENT_USER = "ADD_CURRENT_USER";

export const addCurrentUser = (user) => ({
    type: ADD_CURRENT_USER,
    payload: user
});