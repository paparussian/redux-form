import {LitElement, html} from 'lit-element';

export class SubmitButton extends LitElement{

    render() {
        return html `
            <button type="button">Submit</button>
        `
    }
}
customElements.define('submit-button', SubmitButton);