import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import CourseForm from "./course.form.jsx";


function setup(loading = false) {

    const props = {
        loading: loading,
        course: {},
        errors: {},
        allAuthors: []
    };

    let onChange = () => { };
    let onSave = () => { };

    return shallow(<CourseForm {...props} />);
}


describe("CourseForm via Enzyme", () => {

    it("The form tag is the first element in the node tree", () => {
        const wrapper = setup();
        let actual = wrapper.get(0).type;
        let expected = "form";

        expect(actual).toEqual(expected);

    });

    it("The h4 tag is the first child element in the node tree after form", () => {
        const wrapper = setup();
        let actual = wrapper.find("form").childAt(0).type();
        let expected = "h4";

        expect(actual).toEqual(expected);

    });

    it("the save button is labeled as 'Save' if we are in the initial state", () => {
        const loading = false;
        const wrapper = setup(loading);
        let actual = wrapper.find("input").props().value;
        let expected = "Save";

        expect(actual).toEqual(expected);

    });

    it("the save button is labeled as 'Saving..' if there is an update in progress", () => {
        const loading = true;
        const wrapper = setup(loading);
        let actual = wrapper.find("input").props().value;
        let expected = "Saving...";

        expect(actual).toEqual(expected);

    });

});