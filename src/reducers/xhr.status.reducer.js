import * as actionTypes from "../actions/action.types";
import initialState from "./initialState";

function actionTypeContainsSuccess(actionType) {
    const successSearch = "SUCCESS";
    const errorSearch = "ERROR";
    return actionType.includes(successSearch) || actionType.includes(errorSearch);
}

export default function xhrStatusReducer(state = initialState.numberOfXHRCallsInProgress, action) {
    if (action.type == actionTypes.BEGIN_XHR_CALL) {
        return state + 1;
    }
    else if (actionTypeContainsSuccess(action.type)) {
        return state - 1;
    }
    return state;
}
