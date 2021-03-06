import React from 'react'
import {Link, useParams} from "react-router-dom";
import './course-editor.template.client.css'
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
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    return (
        <Provider store={store}>

            <body>

            <div className="container-xxl">
                <div className="ats-sticky-nav-bar row">
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times fa-2x col-1 ats-back-button"></i>
                    </Link>
                    <div className="col-4 ats-vertical-align">
                        Course Editor
                    </div>
                </div>

                <div className="container-lg">
                    <div className="row ats-page-body ats-fill">
                        <div className="col-3 ats-list-area">
                            <ModuleList/>
                        </div>
                        <div className="col-9 ">
                            <LessonTabs/>
                            <TopicPills/>
                        </div>
                    </div>
                </div>



            </div>



            </body>


        </Provider>
    )
}

export default CourseEditor