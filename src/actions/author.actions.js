import AuthorApi from "../api/mock.author.api";
import * as actionTypes from "./action.types";
import {beginXhrCall} from "./xhr.status.actions";

export function loadAllAuthorsSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginXhrCall);
        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAllAuthorsSuccess(authors));
            })
            .catch(error => { throw (error); });
    };
}