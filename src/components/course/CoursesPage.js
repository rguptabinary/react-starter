import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage(){
        this.props.history.push('/course');
    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
}

// validation
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// returns properties, we want to be exposed to component
// this.prop.courses [to access inside component]
// ownprops lets us access the props being attached to the component
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

// optional, if not passed connect automatically inject dispatch, this.props.dispatch(courseActions.createCourse(this.state.course))
// 
function mapDispatchToProps(dispatch) {
    return {
        //actions: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// connect is a higher order component, that's going to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);