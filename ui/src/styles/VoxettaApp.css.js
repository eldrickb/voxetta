/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {css} from 'lit-element';

export default css`
    /* skeleton  */

    main {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }

    main > div {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }

    .header {
        align-items: center;
        height: 70px;
        flex-direction: row;
    }

    .header > div {
        flex: 1;
    }

    .prompts {
        flex: 1;
    }

    .buttons {
        padding-bottom: 10vh;
        padding-top: 40px;
        flex-direction: row;
        justify-content: center;
    }

    .record-button-container {
        margin: 0 60px;
    }

    .button-container {
        width: 50px;
    }

    /* Details */

    .header {
        padding: 0 12px;
        box-shadow: 0px -2px 8px rgba(128, 134, 139, 0.09),
            0px 4px 8px rgba(128, 134, 139, 0.06),
            0px 1px 2px rgba(60, 64, 67, 0.3),
            0px 2px 6px rgba(60, 64, 67, 0.15);
    }

    .progress {
        text-align: center;
        color: #9aa0a6;
        font-weight: 500;
    }

    .progress span {
        text-align: center;
    }

    /* 
        Breakpoints 
    */

    /* Tablet */
    @media screen and (min-width: 600px) {
        .buttons {
            padding-bottom: 14vh;
        }
    }
`;