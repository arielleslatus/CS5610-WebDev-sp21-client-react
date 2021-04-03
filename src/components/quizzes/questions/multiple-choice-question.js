import React, {useState} from 'react';

const MultipleChoiceQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [graded, setGraded] = useState(false);
    return(
        <div>
            {
                !graded &&
                <>
                    <h4>{question.question} {question.correct}</h4>
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <li className="list-group-item">
                                        <label>
                                            <input type="radio"
                                                   onClick={() => setUserAnswer(choice)}
                                                   name={question._id}/>
                                            {choice}
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
            {
                graded && userAnswer === question.correct &&
                <>
                    <h4>{question.question} {question.correct}
                        <i className="fas fa-check"></i>
                    </h4>
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <>
                                        {
                                            choice === question.correct &&
                                            <li className="list-group-item ats-active">
                                                <label>
                                                    <input type="radio"
                                                           checked
                                                           disabled />
                                                    {choice}
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct &&
                                            <li className="list-group-item">
                                                <label>
                                                    <input type="radio"
                                                           disabled/>
                                                    {choice}
                                                </label>
                                            </li>
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>

                </>
            }
            {
                graded && userAnswer !== question.correct &&
                <>
                    <h4>{question.question} {question.correct}
                        <i className="fas fa-times"></i>
                    </h4>
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <>
                                        {
                                            choice === question.correct &&
                                            <li className="list-group-item ats-active">
                                                <label>
                                                    <input type="radio"
                                                           disabled/>
                                                    {choice}
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct && choice === userAnswer &&
                                            <li className="list-group-item ats-wrong-active">
                                                <label>
                                                    <input type="radio"
                                                           checked
                                                           disabled/>
                                                    {choice}
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct && choice !== userAnswer &&
                                            <li className="list-group-item">
                                                <label>
                                                    <input type="radio"
                                                           disabled/>
                                                    {choice}
                                                </label>
                                            </li>
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>
                </>
            }
            <div>Your Answer:
                {
                    userAnswer !== null &&
                    userAnswer
                }
            </div>
            <button onClick={() => setGraded(true)}>Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion;