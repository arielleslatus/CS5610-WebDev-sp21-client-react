import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";

const LessonTabs = ({lessons = []}) =>
    <div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li className="nav-item">
                                    <EditableItem item={lesson}/>
                                </li>
                )
            }
        </ul>
    </div>

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