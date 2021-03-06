import React from 'react'
import {Link, useParams} from "react-router-dom";
import '../component-style.css'
import ModuleReducer from "../../reducers/module-reducer";
import LessonReducer from "../../reducers/lesson-reducer";
import TopicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {combineReducers, createStore} from "redux";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
                                    moduleReducer: ModuleReducer,
                                    lessonReducer: LessonReducer,
                                    topicReducer: TopicReducer

                                })

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <h1>

                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left fa-2x col-1 ats-back-button"></i>
                </Link>
                Course Editor
            </h1>

            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <TopicPills/>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor