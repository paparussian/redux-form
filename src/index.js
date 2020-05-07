import {applyMiddleware, createStore} from 'redux';
import {reducers} from './store/test/index';

import {actions, selectors} from './store/test';
import {MyForm} from './components/pr-input';
import {SubmitButton} from './components/pr-submit';
import {ResetButton} from './components/pr-reset';
import {ErrorMessage} from './components/pr-message';

/*creo il redux store */
import store from './store';

/*creo render() per renderizzare in HTML */

function render(){
  
}

render(); // vado a prendere i valori allo store e metterli nel componente



/*faccio il subscribe per il render della value nell'element paragraph a ogni aggiornamento 
è un' alternativa a "connect"che dovrà comunque essere poi inserita in sostituzione a subscribe*/
store.subscribe(render);
