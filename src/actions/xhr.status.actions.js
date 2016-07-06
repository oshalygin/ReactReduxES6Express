import * as actionTypes from "./action.types";

export function beginXhrCall() {
    return {
        type: actionTypes.BEGIN_XHR_CALL
    };
}
