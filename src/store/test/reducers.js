import { HANDLE_PASSWORD, HANDLE_CHANGE, USER_CHANGE } from './actions';

const reducers = (state = {input: ''}, action) => {
    switch (action.type){
        case USER_CHANGE:
            return {
                ...state,
                payload: {input: userName.value} || {}
            }
        case HANDLE_PASSWORD:
            return {
                ...state,
                input: state.input
            };
        case HANDLE_CHANGE:
            event.preventDefault();
        default:
            return state
    }
}

export default reducers;