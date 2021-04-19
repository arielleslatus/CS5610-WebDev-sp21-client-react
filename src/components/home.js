import React from 'react'
import {Link} from "react-router-dom";

const Home = () =>
    <>
        <h1>Home</h1>
        <h2>WhiteBoard - Arielle Slatus</h2>
        <div className="list-group">
            <Link to="/login" className="list-group-item">
                Login
            </Link>
            <Link to="/register" className="list-group-item">
                Register
            </Link>
            <Link to="/courses/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
        </div>
    </>

export default Home