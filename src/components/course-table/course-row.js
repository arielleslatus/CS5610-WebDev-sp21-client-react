import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-table.template.client.css'
import '../component-style.css'

const CourseRow = ({course,
                       deleteCourse,
                       updateCourse,
                       setCurrentCourse,
                       title="Unknown",
                       owner="Unknown",
                       lastModified="Unknown"
                    }) => {

    const [editing, setEditing] = useState(false)
    const [inputTitle, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: inputTitle
        }
        updateCourse(newCourse)
    }

    const doDelete = (course) => {
        deleteCourse(course)
        setEditing(false)
        console.log(inputTitle)
    }

    return (
        <tr className="row container-lg ats-row flex-nowrap">
            <td className="col-lx-4 col-lg-4 col-md-6 col-sm-5 col-xs-11">
                <i className="fas fa-folder ats-row-icon"></i>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}
                          className="ats-card-title">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={inputTitle}
                        className="ats-edit-mode-title"/>
                }
            </td>
            <td className="col-xl-2 col-lg-2 col-md-2 col-sm-2 d-none d-sm-table-cell">{course.owner}</td>
            <td className="col-xl-2 col-lg-2 d-none d-lg-table-cell">{course.lastModified}</td>
            <td className="col-xl-2 col-lg-2 col-md-2 col-sm-2 d-none d-sm-table-cell">
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-1 float-left flex-nowrap">
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit ats-row-icon float-right"></i>
                }
                {
                    editing &&
                    <div>
                        <i onClick={() => saveCourse()}
                           className="fas fa-check ats-row-icon float-right"></i>
                        <i onClick={() => doDelete(course)}
                           className="fas fa-trash ats-row-icon float-right"></i>
                    </div>
                }
            </td>
        </tr>
    )
}

export default CourseRow