import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import Route from "react-router-dom/es/Route";
import courseService from "../../services/course-service"
import '../course-table/course-table.template.client.css'
import '../component-style.css'
import SubNavBarGrid from "./sub-nav-bar-grid";
import SubNavBarTable from "./sub-nav-bar-table";

class CourseManager extends React.Component {
    state = {
        courses: [],
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.newCourseTitle,
            owner: "me",
            lastModified: "2/19/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
        this.state.newCourseTitle = "New Course Title"
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    render() {
        return (
            <div className="container-xxl">
                <div class="ats-sticky-nav-bar form-control ">
                    <div className="row flex-nowrap">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block ats-vertical-align">
                            Course Manager
                        </div>
                        <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10">
                            <input type="text"
                                   placeholder="New Course Name"
                                   onChange={(e) => this.setState({newCourseTitle: e.target.value})}
                                   value={this.state.newCourseTitle}
                                   className=" ats-new-course-fld form-control" />
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <i onClick={this.addCourse}
                               className="fas fa-plus fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className="table-responsive-md">
                    <table className="table ats-fill ats-page-body text-nowrap" >
                        <Route path="/courses/grid">
                            <SubNavBarGrid/>
                            <tbody>
                            <CourseGrid
                                setCurrentCourse={this.setCurrentCourse}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}/>
                            </tbody>
                        </Route>
                        <Route path="/courses/table">
                            <SubNavBarTable/>
                            <tbody>
                            <CourseTable
                                setCurrentCourse={this.setCurrentCourse}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}/>
                            </tbody>
                        </Route>
                    </table>
                </div>
                <i onClick={this.addCourse}
                   className="fas fa-plus-circle fa-3x float-right ats-floating-plus-icon"></i>
            </div>
        )
    }
}

export default CourseManager