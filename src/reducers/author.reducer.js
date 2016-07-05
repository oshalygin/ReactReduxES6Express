import * as actionTypes from "../actions/action.types";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {

    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}