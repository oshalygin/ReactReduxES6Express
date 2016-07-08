import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./course.form.jsx";

function setup(loading) {

    let props = {
        course: {},
        loading: loading,
        errors: {}
    };

    let onSave = () => { };
    let onChange = () => { };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("CourseForm via React Test Utils", () => {

    it("renders form with the root tag as form", () => {
        let {output} = setup();

        let expected = "form";
        let actual = output.type;

        expect(actual).toBe(expected);
    });

     it("renders the first child element of form as h1", () => {
        let {output} = setup();

        let expected = "h4";
        let [firstTag] = output.props.children;
        let actual = firstTag.type;

        expect(actual).toBe(expected);
    });

    it("the save button is labeled as 'Save' if we are in the initial state", () => {
        let {output} = setup(false);

        let expected = "Save";
        let submitButton = output.props.children[5];
        let actual = submitButton.props.value;

        expect(actual).toBe(expected);
     });

    it("the save button is labeled as 'Saving...' if we are in the posting state", () => {
        let {output} = setup(true);

        let expected = "Saving...";
        let submitButton = output.props.children[5];
        let actual = submitButton.props.value;

        expect(actual).toBe(expected);
    });
});
