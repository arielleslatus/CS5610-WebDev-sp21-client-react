import React from 'react'
import {Link} from "react-router-dom";
import '../component-style.css'
import ModuleReducer from "../../reducers/module-reducer";
import LessonReducer from "../../reducers/lesson-reducer";
import { Provider } from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {combineReducers, createStore} from "redux";



const reducer = combineReducers({
    moduleReducer: ModuleReducer,
    lessonReducer: LessonReducer


})

const store = createStore(reducer)

const CourseEditor = ({history}) =>
    <Provider store={store}>
        <h1>
            <Link to={"/courses"}>
                <i onClick={() => history.goBack()}
                   className="fas fa-arrow-left fa-2x col-1 ats-back-button"></i>
            </Link>
        </h1>
        <div className="row">
            <div className="col-3">
                <ModuleList />
            </div>
            <div className="col-9">
                <LessonTabs />
            </div>
        </div>
    </Provider>





export default CourseEditor