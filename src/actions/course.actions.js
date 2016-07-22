import CourseApi from "../api/mock.course.api";
import * as actionTypes from "./action.types";
import {beginXhrCall, xhrCallError} from "./xhr.status.actions";

export function loadCoursesSuccess(courses) {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function createdCourseSuccess(course) {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
    };
}

export function updatedCourseSuccess(course) {
    return {
        type: actionTypes.UPDATED_COURSE_SUCCESS,
        course
    };
}


export function loadCourses() {
    return function (dispatch) {
        dispatch(beginXhrCall());
        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                dispatch(xhrCallError());
                throw (error);
            });
    };
}

export function saveCourse(course) {
    return function (dispatch) {
        dispatch(beginXhrCall());
        return CourseApi.saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updatedCourseSuccess(savedCourse))
                    : dispatch(createdCourseSuccess(savedCourse));
            })
            .catch(error => {
                dispatch(xhrCallError());
                throw (error);
            });
    };
}
