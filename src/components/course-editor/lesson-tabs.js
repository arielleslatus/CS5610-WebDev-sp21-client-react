import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from 'react-router-dom'
import lessonService from '../../services/lesson-service'
import moduleService from "../../services/module-service";

const LessonTabs = ({lessons = [],
                        findLessonsForModule,
                        createLesson}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])
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
                <li>
                    <i onClick={() => createLesson(moduleId)}
                       className="fas fa-plus"></i>
                </li>
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
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
    },
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: 'New Lesson'})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson: lesson
            }))
    }



})

export default connect(stpm, dtpm)(LessonTabs)