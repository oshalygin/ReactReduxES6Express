import React, { PropTypes } from "react";
import TextInput from "../common/text.input.jsx";
import SelectInput from "../common/select.input.jsx";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h4>Manage Course</h4>

            <TextInput
                name = "title"
                label = "Title"
                value = {course.title}
                onChange = {onChange}
                error = {errors.title} />

            <SelectInput
                name = "authorId"
                label = "Author"
                value = {course.authorId}
                defaultOption = "Select Author"
                options = {allAuthors}
                onChange = {onChange}
                error = {errors.authorId} />

            <TextInput
                name = "category"
                label = "Category"
                value = {course.category}
                onChange = {onChange}
                error = {errors.category} />

            <TextInput
                name = "length"
                label = "Length"
                value = {course.length}
                onChange = {onChange}
                error = {errors.length} />

            <input
                type = "submit"
                disabled = {loading}
                value = {loading ? "Saving..." : "Save"}
                className = "btn btn-primary btn-sm"
                onClick = {onSave} />

        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    // loading: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object.isRequired
};

export default CourseForm;