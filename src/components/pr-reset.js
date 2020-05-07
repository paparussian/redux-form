import {LitElement, html} from 'lit-element';

export class ResetButton extends LitElement{



    render() {
        return html `
            <button type="button">Reset</button>
        `
    }
}
customElements.define('reset-button', ResetButton);