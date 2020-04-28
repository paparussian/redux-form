const getReducer = (state) => state.test;
const getInput = (state) => getReducer(state).input;

export default {  
    getInput 
};