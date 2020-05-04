import { HANDLE_USERNAME, HANDLE_PASSWORD, HANDLE_CHANGE } from './actions';

const reducers = (state = {input: ''}, action) => {
    switch (action.type){
        case HANDLE_USERNAME:
            return {
                ...state,
                input: state.input + action.payload
            };
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