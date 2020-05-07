import {createAction} from 'redux-actions';

export const USER_CHANGE = 'USER_CHANGE';
export const RESET_FORM = 'RESET_FORM'

export const userChange = (key, value) => {
    return {
        type: USER_CHANGE, 
        payload: {key, value}
    };
}

export const resetForm = () => {
    return {
        type: RESET_FORM,
    }
};



export default { userChange, resetForm };