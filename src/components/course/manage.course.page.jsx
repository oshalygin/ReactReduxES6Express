import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course.actions";
import CourseForm from "./course.form.jsx";


class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    //
}

function mapStateToProps(state, ownProps) {
    return {
        course: state.course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
