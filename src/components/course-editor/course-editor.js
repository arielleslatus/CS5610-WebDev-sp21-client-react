import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import './course-editor.template.client.css'
import '../component-style.css'
import ModuleReducer from "../../reducers/module-reducer";
import LessonReducer from "../../reducers/lesson-reducer";
import TopicReducer from "../../reducers/topic-reducer";
import WidgetReducer from "../../reducers/widget-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {combineReducers, createStore} from "redux";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service"
import WidgetList from "./widgets/widget-list";

const reducer = combineReducers({
                                    moduleReducer: ModuleReducer,
                                    lessonReducer: LessonReducer,
                                    topicReducer: TopicReducer,
                                    widgetReducer: WidgetReducer

                                })

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    const [inputTitle, setTitle] = useState(null)

    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setTitle(course.title))
    }, [courseId])

    return (
        <Provider store={store}>
            <body>
                <div className="container-xxl">
                    <div className="ats-sticky-nav-bar row">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <Link to={`/courses/${layout}`} className="">
                                <i className="fas fa-times fa-2x col-1 ats-back-button"></i>
                            </Link>
                        </div>

                        <div className="col-lg-2 d-none d-lg-block ats-vertical-align">
                            Course Editor
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9 col-xs-9 ats-course-title">
                            {inputTitle}
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2"></div>
                    </div>

                    <div className="container-lg">
                        <div className="row ats-page-body ats-fill">
                            <div className="col-3 ats-list-area">
                                <h2 className="ats-category-title">Modules</h2>
                                <ModuleList/>
                            </div>
                            <div className="col-9 ">
                                <h2 className="ats-category-title">Lessons</h2>
                                <LessonTabs/>
                                <h2 className="ats-category-title">Topics</h2>
                                <TopicPills/>
                                <h2 className="ats-category-title">Widgets</h2>
                                <WidgetList/>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </Provider>
    )
}

export default CourseEditor