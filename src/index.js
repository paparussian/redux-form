import {applyMiddleware, createStore} from 'redux';
import {reducers} from './store/test/index';

import {actions, selectors} from './store/test';

/*creo il redux store */
import store from './store';

/*creo render() per renderizzare in HTML */

const firstName = document.getElementById('firtsName');
const lastName = document.getElementById('lastName');

function render(){

}

firstName.addEventListener('focus', (event) => {
    event.target.value = selectors.getInput(store.getState());
});

lastName.addEventListener('focus', (event) => {
    event.target.value = '';
});


render();

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    store.dispatch(actions.handleChange());
})

console.log(store.getState())
