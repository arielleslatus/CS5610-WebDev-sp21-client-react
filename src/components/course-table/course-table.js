import React from 'react'
import CourseRow from "./course-row";
import './course-table.template.client.css'
import '../component-style.css'

class CourseTable extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ats-table-area" >
                {
                    this.props.courses.map(course => <CourseRow
                        key={course._id}
                        course={course}
                        deleteCourse={this.props.deleteCourse}
                        updateCourse={this.props.updateCourse}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}
                    />)
                }
            </div>
        )
    }
}

export default CourseTable

