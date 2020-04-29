import { HANDLE_USERNAME, HANDLE_PASSWORD } from './actions';

const reducers = (state = {input: ''}, action) => {
    switch (action.type){
        case HANDLE_USERNAME:
            return {
                ...state,
                input: state.input
            };
        case HANDLE_PASSWORD:
            return {
                ...state,
                input: state.input
            }
        default:
            return state
    }
}

export default reducers;