import expect from "expect";
import * as courseActions from "./course.actions";
import * as actionTypes from "./action.types";

describe("Course Actions", () => {
    it("createCourseSuccess appropriately returns back the course object", () => {

        const course = {
            id: "clean-code",
            title: "Clean Code"
        };

        let expected = actionTypes.CREATE_COURSE_SUCCESS;
        let actual = courseActions.createdCourseSuccess(course).type;

        expect(actual).toEqual(expected);

    });
});