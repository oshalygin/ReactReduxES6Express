
import * as actionTypes from "../actions/action.types";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        case actionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state, Object.assign({}, action.course)
            ];
        case actionTypes.UPDATED_COURSE_SUCCESS:
            {
                let updatedCourse = [...state];
                let existingCourseIndex = updatedCourse.findIndex(course => course.id === action.course.id);
                updatedCourse.splice(existingCourseIndex, 1, Object.assign({}, action.course));

                return [
                    ...updatedCourse
                ];
            }
        default:
            return state;
    }
}


