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

firstName.addEventListener('blur', (event) => {
    store.dispatch(actions.handleFirstName());
});

lastName.addEventListener('blur', (event) => {
    store.dispatch(actions.handleLastName());
});


render();

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    store.dispatch(actions.handleChange());
})

console.log(store.getState());

/*faccio il subscribe per il render della value nell'element paragraph a ogni aggiornamento 
è un' alternativa a "connect"che dovrà comunque essere poi inserita in sostituzione a subscribe*/
store.subscribe(render);
