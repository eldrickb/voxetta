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
    button {
        display: flex;
        align-items: center;
        padding: 10px 14px;

        background: #ffffff;
        border: 1px solid #bdc1c6;
        box-sizing: border-box;
        border-radius: 999px;
        cursor: pointer;
        color: #5f6368;
        font-weight: 700;
    }

    button:hover {
        background-color: #dcdcdc;
    }

    mwc-icon {
        margin-right: 6px;
    }

    span {
        line-height: 0;
    }
`;
