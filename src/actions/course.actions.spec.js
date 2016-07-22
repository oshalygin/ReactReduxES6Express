import expect from "expect";
import * as courseActions from "./course.actions";
import * as actionTypes from "./action.types";

import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Course Actions", () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it("createCourseSuccess appropriately returns back the course object", () => {

        const course = {
            id: "clean-code",
            title: "Clean Code"
        };

        let expected = actionTypes.CREATE_COURSE_SUCCESS;
        let actual = courseActions.createdCourseSuccess(course).type;

        expect(actual).toEqual(expected);

    });

    it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {

        // nock("http://www.techiejs.com")
        //     .get("/posts")
        //     .reply(200, { body: { title: "derp" } });

        const expectedActions = [
            { type: actionTypes.BEGIN_XHR_CALL },
            { type: actionTypes.LOAD_COURSES_SUCCESS, body: { courses: [{ id: "clean-code", title: "Clean Code" }] } }
        ];

        const store = mockStore({ courses: [] }, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(actionTypes.BEGIN_XHR_CALL);
            expect(actions[1].type).toEqual(actionTypes.LOAD_COURSES_SUCCESS);

            done();
        });


    });

});