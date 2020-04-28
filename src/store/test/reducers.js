import { HANDLE_CHANGE } from './actions';

const reducers = (state = {input: 'empty field'}, action) => {
    switch (action.type){
        case HANDLE_CHANGE:
            return {
                ...state,
                input: state.input /*TODO - aggiungere payload se modifica state (+ action.payload)*/
            };
        default:
            return state
    }
}

export default reducers;