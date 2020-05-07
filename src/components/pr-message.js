import {LitElement, html} from 'lit-element';

export class ErrorMessage extends LitElement {
    render(){
        return html `
            <div>
                <p>La password può contenere solo numeri</p>
            </div>
        `
    }
}
customElements.define('error-message', ErrorMessage);
