import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from 'react-router-dom'

const LessonTabs = ({lessons = []}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    return (
        <div>
            <h2>Lesson Tabs</h2>
            <ul>
                <li>layout: {layout}</li>
                <li>course id: {courseId}</li>
                <li>module id: {moduleId}</li>
                <li>lesson id: {lessonId}</li>
            </ul>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                                    <li className="nav-item">
                                        <EditableItem
                                            to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            item={lesson}/>
                                    </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return ({
        lessons: state.lessonReducer.lessons
    })
}

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    }
})

export default connect(stpm, dtpm)(LessonTabs)