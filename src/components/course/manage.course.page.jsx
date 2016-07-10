import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authorsFormattedForDropdown } from "../../selectors/selectors.js";
import toastr from "toastr";
import * as courseActions from "../../actions/course.actions";
import * as authorActions from "../../actions/author.actions";
import CourseForm from "./course.form.jsx";


export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirect = this.redirect.bind(this);
        // this.courseFormIsValid = this.courseFormIsValid.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.course.id !== newProps.course.id) {
            this.setState({ course: Object.assign({}, newProps.course) });
        }
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters long";
            formIsValid = false;
            this.setState({ errors: errors });
        }
        return formIsValid;
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch((error) => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });

        toastr.success("Saved!", "Course Update");
        this.context.router.push("/courses");
    }

    render() {
        const {course} = this.state;
        const {authors} = this.props;

        return (
            <div>
                <CourseForm
                    allAuthors={authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                    course={course}
                    loading={this.state.saving} />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,

};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let course = {
        id: '',
        title: '',
        watchHref: '',
        auhorId: '',
        length: '',
        category: ''
    };

    if (!!ownProps.routeParams.id) {
        let courseExists = state.courses.find(course => course.id === ownProps.routeParams.id);
        course = !!courseExists ? courseExists : course;
    }

    let authors = authorsFormattedForDropdown(state.authors);

    return {
        course: course,
        authors: authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
