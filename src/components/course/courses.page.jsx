import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course.actions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index}>
                {course.title}
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3>Courses</h3>
                <br/>
                {this.props.courses.map(this.courseRow) }
                <hr/>
                <p style={{ marginTop: 20 + "px" }}>Add a course: </p>
                <div className="form-group col-md-3">
                    <input
                        type="text"
                        onChange={this.onTitleChange}
                        className="form-control"
                        value={this.state.course.title} />

                    <br/>

                    <input
                        type="submit"
                        value="Save"
                        className="btn btn-sm btn-primary"
                        onClick={this.onClickSave} />
                </div>
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