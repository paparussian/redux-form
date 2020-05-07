import {LitElement, html} from 'lit-element';
import { getInput } from '../store/test/selectors';
import { ErrorMessage } from './pr-message';
import {reducers} from '../store/test/index';
import {actions, selectors} from '../store/test/index';
import store from '../store/index';
import { userChange, resetForm } from '../store/test/actions';
import { connect } from '../store/test/connect.js'



export class MyForm extends LitElement {

    validateInput(e){
        const key = e.target.id,
        value = e.target.value;
        store.dispatch(userChange(key, value));
    }

    resetForm(e){
        console.log(e);
        store.dispatch(resetForm());
    }
    

    render () {
        return html `
            <h1>Redux Login Form</h1>
            <form method={this.method} @submit="${this.checkEqualPwd}">
                <div>
                    <label>Name:</label>
                    <input type="text" id="name" placeholder="Name" @change=${this.validateInput} required>
                </div> 
                <div>
                <label>Surname:</label>
                <input type="text" id="surname" placeholder="Surname" @change=${this.validateInput} required>
                </div> 
                <div> 
                    <label>Age:</label>
                    <input type="number" id="age" placeholder="Age" min="0" max="100" @change=${this.validateInput}>  
                </div>
                <div> 
                    <label>Password:</label>
                    <input type="password" id="password" placeholder="Password" @change=${this.validateInput}>  
                </div>
                <div> 
                    <label>Confirm Password:</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" @change=${this.validateInput}>  
                </div>
                <input type="submit" value="Submit">
                <span><reset-button @click=${this.resetForm}></reset-button></span>
            </form> 
        `
    }
} 

const mapStateToProps = (state) => {

}

customElements.define(
    'my-form',
    connect(mapStateToProps, null)(MyForm)
);

