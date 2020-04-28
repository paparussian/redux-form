import {createAction} from 'redux-actions';

export const HANDLE_FIRSTNAME = 'HANDLE_FIRSTNAME';
export const handleFirstName = createAction(HANDLE_FIRSTNAME);

export const HANDLE_LASTNAME = 'HANDLE_LASTNAME';
export const handleLastName = createAction(HANDLE_LASTNAME);



export default { handleFirstName, handleLastName };