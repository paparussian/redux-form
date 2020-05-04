import {createAction} from 'redux-actions';

export const USER_CHANGE = 'USER_CHANGE';
export const changeUserValue = (key, value) => ({type: USER_CHANGE, payload: {[key]: value}});

export const HANDLE_PASSWORD = 'HANDLE_PASSWORD';
export const handlePassword = createAction(HANDLE_PASSWORD);

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const handleChange = createAction(HANDLE_CHANGE);



export default { handlePassword, handleChange, changeUserValue };