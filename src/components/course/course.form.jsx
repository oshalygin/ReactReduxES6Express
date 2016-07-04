import React from "react";
import TextInput from "../common/text.input.jsx";
import SelectInput from "../common/select.input.jsx";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h4>Manage Course</h4>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange = {onChange}
                error = {errors.title} />

        </form>
    );
};