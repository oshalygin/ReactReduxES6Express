import * as actionTypes from "./action.types";

export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course
    };
}