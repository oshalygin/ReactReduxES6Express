import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course.actions";
import CourseList from "./course.list.jsx";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return (
            <div key={index}>
                {course.title}
            </div>
        );
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h4>Courses</h4>
                <br/>
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // {this.props.courses.map(this.courseRow) }
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