import {createAction} from 'redux-actions';

export const HANDLE_USERNAME = 'HANDLE_USERNAME';
export const handleUserName = createAction(HANDLE_USERNAME);

export const HANDLE_PASSWORD = 'HANDLE_PASSWORD';
export const handlePassword = createAction(HANDLE_PASSWORD);



export default { handleUserName, handlePassword };