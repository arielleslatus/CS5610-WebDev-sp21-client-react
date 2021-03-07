import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from 'react-router-dom'
import lessonService from '../../services/lesson-service'
import topicService from "../../services/topic-service";


const LessonTabs = ({lessons = [],
                        createLesson,
                        findLessonsForModule,
                        updateLesson,
                        deleteLesson,
                        clearLessons
                    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();


    useEffect(() => {
        if (moduleId !== undefined && typeof moduleId !== undefined) {
            findLessonsForModule(moduleId)
        } else {
            clearLessons()
            //findLessonsForModule(undefined)

        }
    }, [moduleId, lessons])
    return (
        <div className="ats-lesson-tabs">
            <h2>Lesson Tabs</h2>
            <ul className="nav nav-pills ats-unordered-pills">
                {
                    lessons.map(lesson =>
                                    <li key={lesson._id}
                                        className="nav-item ats-nav-item">
                                        <EditableItem
                                            to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            active={lesson._id === lessonId}
                                            item={lesson}
                                            isModule={false}/>
                                    </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)}
                       className="fas fa-plus fa-2x ats-plus-icon"></i>
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
    createLesson: (moduleId) => {
        if (moduleId !== undefined) {
            lessonService.createLesson(moduleId, {title: 'New Lesson'})
                .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))
        }
    },
    findLessonsForModule: (moduleId) => {
        if (moduleId !== undefined) {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons: lessons}))
        }
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updatedLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    clearLessons: () => {
        dispatch({type: "CLEAR_LESSONS"})
        dispatch({type: "CLEAR_TOPICS"})
    }
})

export default connect(stpm, dtpm)(LessonTabs)