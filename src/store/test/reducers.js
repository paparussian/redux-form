import { USER_CHANGE, RESET_FORM } from './actions';

const initialState = () => {
    return {name: '',
     surname: '',
     age: 0,
     password: '',
     confirmPassword: ''
    }
}

/* TODO - scrivere funzione che controlla input*/

const checkInput = (state, payload) => {
    const regexp = /[0-9]+/;
    if (payload.key === 'age' && !payload.value.match(regexp)){
        return state
    } else {
       return { 
           ...state,
           [payload.key]:payload.value
        }
    }
}

const reducers = (state = initialState(), action) => {
    switch (action.type){
        case USER_CHANGE:
            return 
                checkInput(state, action.payload);
        case RESET_FORM:
            return initialState();
        default:
            return state
    }
}

export default reducers;