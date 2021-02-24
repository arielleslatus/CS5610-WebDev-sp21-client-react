import React from 'react'
import {Link} from "react-router-dom";
import '../component-style.css'

const CourseEditor = ({history}) => {
    return(
        <div className="container-xxl">
            <div className="ats-sticky-nav-bar row">
                <Link to={"/courses"}>
                    <i onClick={() => history.goBack()}
                       className="fas fa-arrow-left fa-2x col-1 ats-back-button"></i>
                </Link>
                <div className="col-4 ats-vertical-align">
                    Course Editor
                </div>
                <ul className="nav nav-tabs col-7">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>


            <div className="container-lg">
                <div className="row ats-page-body ats-fill">

                    <div className="ats-list-area col-4">

                        <ul className="ats-list">
                            <li className="list-group-item">
                                Module 1 - jQuery
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item active">
                                Module 2 - React
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item">
                                Module 3 - Redux
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item">
                                Module 4 - Native
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item">
                                Module 5 - Angular
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item">
                                Module 6 - Node
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <li className="list-group-item">
                                Module 7 - Mongo
                                <i className="fas fa-times float-right"></i>
                            </li>
                            <div className="ats-add-module">
                                <i className="fas fa-plus float-right"></i>
                            </div>
                        </ul>
                        <br/>
                        <div className="ats-home-button">
                            <a href="../index.html">Home</a>

                        </div>

                    </div>


                    <div className="ats-pills-content-area col-8">
                        <br/>

                        <ul className="nav nav-pills">
                            <li className="nav-item ">
                                <a className="nav-link ats-pill" href="#">Topic 1</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active ats-pill" aria-current="page"
                                   href="#">Topic 2</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link ats-pill" href="#">Topic 3</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link ats-pill" href="#">Topic 4</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link ats-pill" href="#">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </li>
                        </ul>
                        <br/>
                        Content Intentionally Left Blank
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CourseEditor