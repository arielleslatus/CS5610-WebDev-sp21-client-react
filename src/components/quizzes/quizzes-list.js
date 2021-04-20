import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service'

const QuizzesList = () => {
    const [quizzes, setQuizzes] = useState([])
    const {courseId} = useParams();
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            });
    }, [])
    return(
        <div className="ats-quiz-list-page-body">
            <h2 className="ats-quiz-title">Quizzes List</h2>
            <div className="list-group ats-question-list">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                key={quiz._id}
                                className="list-group-item ">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;