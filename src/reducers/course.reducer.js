
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
        case actionTypes.UPDATED_COURSE_SUCCES:
            {
                let existingCourseIndex = state.findIndex(course => course.id === action.course.id);
                state.splice(existingCourseIndex, 1, Object.assign({}, action.course));

                return [
                    ...state
                ];
            }
        default:
            return state;
    }
}


