import {LitElement, html} from 'lit-element';
import { MyForm } from './pr-input';
import { userChange } from '../store/test/actions';
import store from '../store';

export class SubmitButton extends LitElement{

    render() {
        return html `
            <button type="button">Submit</button>
        `
    }
}
customElements.define('submit-button', SubmitButton);