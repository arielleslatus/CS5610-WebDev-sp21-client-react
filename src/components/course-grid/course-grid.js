import React from 'react'
import CourseCard from "./course-card";
import '../course-table/course-table.template.client.css'
import '../component-style.css'

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="row container-lg ats-list-area">
        {
            courses.map(course => <CourseCard
                    key={course._id}
                    course={course}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    title={course.title}
                    owner={course.owner}
                    lastModified={course.lastModified}
            />)
        }
    </div>

export default CourseGrid