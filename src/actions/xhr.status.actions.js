import * as actionTypes from "./action.types";

export function beginXhrCall() {
    return {
        type: actionTypes.BEGIN_XHR_CALL
    };
}

export function xhrCallError() {
    return {
        type: actionTypes.XHR_CALL_ERROR
    };
}
