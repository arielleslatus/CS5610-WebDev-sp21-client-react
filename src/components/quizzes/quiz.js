import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import questionService from '../../services/question-service'
import quizService from '../../services/quiz-service'

import Question from "./questions/question";
import './quizzes-style.css'

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const {courseId, quizId} = useParams();
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

    const submitQuiz = () => {
        quizService.submitQuiz(quizId, questions)
    }
    return(
        <div className="ats-quiz-page-body">
            <h2 className="ats-quiz-title">Quiz {quizId}</h2>
            <ol className="list-group ats-question-list">
                {
                    questions.map(question => {
                        return(

                            <li key={question._id}
                                className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ol>
            <Link to={`/courses/${courseId}/quizzes/${quizId}/scores`} onClick={() => submitQuiz()} className="ats-submit-quiz-btn">
                Submit Quiz
            </Link>
        </div>
    )
}

export default Quiz;