import { USER_CHANGE, RESET_FORM } from './actions';

export const initialState = () => {
    return {name: '',
     surname: '',
     age: 0,
     password: '',
     confirmPassword: ''
    }
}

/*scrivere funzione che controlla input*/



const reducers = (state = initialState(), action) => {
    switch (action.type){
        case USER_CHANGE:
            return {
                ...state,
                [action.payload.key]:action.payload.value
            };
        case RESET_FORM:
            return initialState();
        default:
            return state
    }
}

export default reducers;