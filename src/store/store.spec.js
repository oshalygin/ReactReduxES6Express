import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers/index";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/course.actions";

describe("Store", () => {

    it("It should handle creating courses", () => {
        const expected = "Clean Code";
        const store = createStore(rootReducer, initialState);
        const course = { id: "clean-code", title: "Clean Code" };

        const action = courseActions.createdCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0].title;

        expect(actual).toEqual(expected);

    });
});