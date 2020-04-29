import {applyMiddleware, createStore} from 'redux';
import {reducers} from './store/test/index';

import {actions, selectors} from './store/test';

/*creo il redux store */
import store from './store';

/*creo render() per renderizzare in HTML */

const userName = document.getElementById('userName');
const password = document.getElementById('password');
const paragraph = document.getElementById('paragraph');

function render(){

}

userName.addEventListener('blur', () => {
    store.dispatch(actions.handleUserName(userName.value));
});

password.addEventListener('blur', () => {
    store.dispatch(actions.handlePassword(password.value));
});


render();

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    store.dispatch(actions.handleChange());
    paragraph.innerHTML = `Hello ${userName.value}!`;
})

/*faccio il subscribe per il render della value nell'element paragraph a ogni aggiornamento 
è un' alternativa a "connect"che dovrà comunque essere poi inserita in sostituzione a subscribe*/
store.subscribe(render);
