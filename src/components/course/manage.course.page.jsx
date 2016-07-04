import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course.actions";
import CourseForm from "./course.form.jsx";


class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    render() {
        const {course} = this.state;
        return (
            <div>
                <CourseForm course={course} />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    //
}

function mapStateToProps(state, ownProps) {
    let course = {
        id: '',
        title: '',
        watchHref: '',
        auhorId: '',
        length: '',
        category: ''
    };

    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
