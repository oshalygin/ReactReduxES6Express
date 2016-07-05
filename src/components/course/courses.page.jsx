import React, {PropTypes} from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course.actions";
import CourseList from "./course.list.jsx";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return (
            <div key={index}>
                {course.title}
            </div>
        );
    }

    redirectToAddCoursePage() {
        browserHistory.push("/course");
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h4>Courses</h4>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-sm btn-default"
                    onClick={this.redirectToAddCoursePage} />
                <br/>
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);