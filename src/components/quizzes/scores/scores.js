import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import quizService from "../../../services/quiz-service";
import './scores-style.css'
import {Link} from "react-router-dom";

const Scores = () => {
    const {courseId, quizId} = useParams();
    const [attempts, setAttempts] = useState([])
    let counter = 0;
    const count = () => {
        return counter += 1
    }
    useEffect(() => {
        quizService.findAttemptsForQuiz(quizId).then((attempts) => {setAttempts(attempts)})
    }, [])
    return(
        <div className="ats-scores-page-body">
            <h1>Quiz {quizId} Scores</h1>
            <ul className="list-group ats-scores-list">

                {
                    attempts && attempts.map((attempt) => {
                        return(
                            <li key={attempt._id} className="list-group-item ats-score">
                                <div className="row">
                                    <div className="col-6">Attempt {count()}:</div>
                                    <div className="col-6">{attempt.score}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Scores;