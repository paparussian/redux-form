import {createAction} from 'redux-actions';

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const handleChange = createAction(HANDLE_CHANGE);

export default { handleChange };