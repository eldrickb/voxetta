/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

import {LitElement, html, css} from 'lit-element';

export class VoxettaMain extends LitElement {
    static get properties() {
        return {
            title: {type: String},
            page: {type: String},
        };
    }

    static get styles() {
        return css``;
    }

    render() {
        return html`
            <main>
                Welcome to the Voxetta app
            </main>
        `;
    }
}

customElements.define('voxetta-main', VoxettaMain);
