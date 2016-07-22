import React, { PropTypes } from "react";
import CourseListRow from "./course.list.row.jsx";

const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp; </th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => {
                    return <CourseListRow key={course.id} course={course} />
                }) }
            </tbody>
        </table>
    );
};

CourseList.PropTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;