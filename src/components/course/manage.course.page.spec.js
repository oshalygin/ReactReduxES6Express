import expect from "expect";
import React from "react";
import { shallow, mount } from "enzyme";
import { ManageCoursePage } from "./manage.course.page.jsx";

describe("Manage Course Page", () => {
    let props = {
        course: {
            id: '',
            title: '',
            watchHref: '',
            auhorId: '',
            length: '',
            category: ''
        },
        authors: [],
        actions: {
            saveCourse: () => { return Promise.resolve(); }
        }
    };

    let wrapper = mount(<ManageCoursePage {...props} />);


    it("The submit button appropriately is marked of type 'submit'", () => {

        let expected = "submit";
        let saveButton = wrapper.find("input").last();
        let actual = saveButton.prop("type");

        expect(actual).toEqual(expected);

    });

    it("The error is activated when trying to save an empty title", () => {
        let expected = "Title must be at least 5 characters long";
        let saveButton = wrapper.find("input").last();
        saveButton.simulate("click");
        let actual = wrapper.state().errors.title;

        expect(actual).toEqual(expected);

    });

});
