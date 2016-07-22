import expect from "expect";
import courseReducer from "./course.reducer";
import * as actionTypes from "../actions/action.types";

describe("Course Reducer", () => {

    it("should add a new course when passed in CREATE_COURSE_SUCCESS", () => {
        const expected = 3;

        const addedCourse = {
            id: "clean-code",
            title: "Clean Code",
            length: "14:04",
            author: "oleg-shalygin"
        };

        const createCourseAction = {
            type: actionTypes.CREATE_COURSE_SUCCESS,
            course: addedCourse
        };


        const initialState = [{ title: "Some Title" }, { title: "Another Title" }];

        let newCoursesState = courseReducer(initialState, createCourseAction);
        let actual = newCoursesState.length;

        expect(actual).toEqual(expected);

    });

    it("should update the course with new information when the action is UPDATE_COURSE_SUCCESS", () => {
        const expected = "Oleg";

        const initialState = [
            { id: "clean-code", title: "Clean Code", length: "5:15", author: "Derplord" }
        ];

        let updatedCourse = Object.assign({}, initialState[0]);
        updatedCourse.author = "Oleg";
        updatedCourse.length = "6:30";

        const updateCourseAction = {
            type: actionTypes.UPDATED_COURSE_SUCCESS,
            course: updatedCourse
        };

        let updatedCourseState = courseReducer(initialState, updateCourseAction);
        let actual = updatedCourseState[0].author;

        expect(actual).toEqual(expected);
        expect(updatedCourseState.length).toEqual(initialState.length);
    });

});