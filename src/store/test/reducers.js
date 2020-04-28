import { HANDLE_FIRSTNAME, HANDLE_LASTNAME } from './actions';

const reducers = (state = {input: ''}, action) => {
    switch (action.type){
        case HANDLE_FIRSTNAME:
            return {
                ...state,
                input: state.input /*TODO - aggiungere payload se modifica state (+ action.payload)*/
            };
        case HANDLE_LASTNAME:
            return {
                ...state,
                input: state.input
            }
        default:
            return state
    }
}

export default reducers;