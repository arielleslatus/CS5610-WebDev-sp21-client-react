import React, {useState} from 'react';
import './question-style.css'

const MultipleChoiceQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [graded, setGraded] = useState(false);
    const setQuestionAnswer = () => {
        question.answer = userAnswer;
    }

    return(
        <div className="ats-question-block">
            {
                !graded &&
                <>
                    <h4>
                        {question.question}
                    </h4>
                    <ul className="list-group ats-question-list">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <li className="list-group-item ats-question-choice">
                                        <label className="ats-question-label row">
                                            <input type="radio"
                                                   onClick={() => setUserAnswer(choice)}
                                                   name={question._id}
                                                   className="ats-question-input col-1"/>
                                            <div className="col-10">{choice}</div>
                                            <div className="col-1"></div>
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
                    <h4>
                        <>{question.question}  </>
                        <i className="fas fa-check ats-check"></i>
                    </h4>
                    <ul className="list-group ats-question-list">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <>
                                        {
                                            choice === question.correct &&
                                            <li className="list-group-item ats-question-choice ats-active">
                                                <label className="ats-question-label row">
                                                    <input type="radio"
                                                           checked
                                                           disabled
                                                           className="ats-question-input col-1"/>
                                                    <div className="col-10">{choice}</div>
                                                    <i className="fas fa-check ats-check ats-graded-icon col-1"></i>
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct &&
                                            <li className="list-group-item ats-question-choice">
                                                <label className="ats-question-label row">
                                                    <input type="radio"
                                                           disabled
                                                           className="ats-question-input col-1"/>
                                                    <div className="col-10">{choice}</div>
                                                    <div className="col-1"></div>
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
                    <h4>
                        <>{question.question}  </>
                        <i className="fas fa-times ats-times"></i>
                    </h4>
                    <ul className="list-group ats-question-list">
                        {
                            question.choices.map((choice) => {
                                return(
                                    <>
                                        {
                                            choice === question.correct &&
                                            <li className="list-group-item ats-question-choice ats-active">
                                                <label className="ats-question-label row">
                                                    <input type="radio"
                                                           disabled
                                                           className="ats-question-input col-1"/>
                                                    <div className="col-10">{choice}</div>
                                                    <i className="fas fa-check ats-check ats-graded-icon col-1"></i>
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct && choice === userAnswer &&
                                            <li className="list-group-item ats-question-choice ats-wrong-active">
                                                <label className="ats-question-label row">
                                                    <input type="radio"
                                                           checked
                                                           disabled
                                                           className="ats-question-input col-1"/>
                                                    <div className="col-10">{choice}</div>
                                                    <i className="fas fa-times ats-times ats-graded-icon col-1"></i>
                                                </label>
                                            </li>
                                        }
                                        {
                                            choice !== question.correct && choice !== userAnswer &&
                                            <li className="list-group-item ats-question-choice">
                                                <label className="ats-question-label row">
                                                    <input type="radio"
                                                           disabled
                                                           className="ats-question-input col-1"/>
                                                    <div className="col-10">{choice}</div>
                                                    <div className="col-1"></div>
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
            <br/>
            <div>Your Answer:
                {
                    userAnswer !== null &&
                    <> {userAnswer}</>
                }
            </div>
            <br/>
            <button onClick={() => {setGraded(true); setQuestionAnswer()}}
                    className="ats-grade-btn">Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion;