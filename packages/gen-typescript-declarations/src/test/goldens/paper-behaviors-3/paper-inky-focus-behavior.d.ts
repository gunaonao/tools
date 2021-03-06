/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-inky-focus-behavior.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';

import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';

import {PaperRippleBehavior} from './paper-ripple-behavior.js';

/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 */
interface PaperInkyFocusBehavior extends IronButtonState, IronControlState, PaperRippleBehavior {
  _createRipple(): any;
  _focusedChanged(receivedFocusFromKeyboard: any): void;
}

declare const PaperInkyFocusBehavior: object;

export {PaperInkyFocusBehavior};
