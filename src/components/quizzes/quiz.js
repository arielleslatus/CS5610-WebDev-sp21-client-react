import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import questionService from '../../services/question-service'
import Question from "./questions/question";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const {courseId, quizId} = useParams();
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])
    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ol className="list-group">
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
        </div>
    )
}

export default Quiz;