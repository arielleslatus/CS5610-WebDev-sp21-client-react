import React from 'react';

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question} {question.correct}</h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className="list-group-item">
                                <label>
                                    <input type="radio" name={question._id}/>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <button>Grade</button>


        </div>
    )
}

export default MultipleChoiceQuestion;