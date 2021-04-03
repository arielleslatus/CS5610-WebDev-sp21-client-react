import React, {useState} from 'react';
import './question-style.css'

const TrueFalseQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const [graded, setGraded] = useState(false);
     return(
         <div className="ats-question-block">
             {
                 !graded &&
                 <>
                     <h4>{question.question}</h4>
                     <ul className="list-group">
                         <li className="list-group-item ats-question-choice">
                             <label className="ats-question-label row">
                                 <input type="radio"
                                        onClick={() => setUserAnswer(true)}
                                        name={question._id}
                                        className="ats-question-input col-1"/>
                                 <div className="col-10">TRUE</div>
                                 <div className="col-1"></div>
                             </label>
                         </li>
                         <li className="list-group-item ats-question-choice">
                             <label className="ats-question-label row">
                                 <input type="radio"
                                        onClick={() => setUserAnswer(false)}
                                        name={question._id}
                                        className="ats-question-input col-1"/>
                                 <div className="col-10">FALSE</div>
                                 <div className="col-1"></div>
                             </label>
                         </li>
                     </ul>
                 </>
             }
             {
                 graded === true && JSON.stringify(userAnswer) === question.correct &&
                 <>
                     <h4>
                         <>{question.question}  </>
                         <i className="fas fa-check ats-check"></i>
                     </h4>
                     <ul className="list-group">
                         {
                             userAnswer == true &&
                             <>
                                 <li className="list-group-item ats-question-choice ats-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                checked disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">TRUE</div>
                                         <i className="fas fa-check ats-check ats-graded-icon col-1"></i>

                                     </label>
                                 </li>
                                 <li className="list-group-item ats-question-choice">
                                     <label className="ats-question-label row">
                                         <input type="radio" disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">FALSE</div>
                                         <div className="col-1"></div>
                                     </label>

                                 </li>
                             </>
                         }
                         {
                             userAnswer === false &&
                             <>
                                 <li className="list-group-item ats-question-choice">
                                     <label className="ats-question-label row">
                                         <input type="radio" disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">TRUE</div>
                                         <div className="col-1"></div>
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-question-choice ats-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                checked disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">FALSE</div>
                                         <i className="fas fa-check ats-check ats-graded-icon col-1"></i>

                                     </label>
                                 </li>
                             </>
                         }

                     </ul>
                 </>
             }
             {
                 graded === true && JSON.stringify(userAnswer) !== question.correct &&
                 <>
                     <h4>
                         <>{question.question}  </>
                         <i className="fas fa-times ats-times"></i>
                     </h4>
                     <ul className="list-group">
                         {
                             userAnswer == true &&
                             <>
                                 <li className="list-group-item ats-question-choice ats-wrong-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                checked
                                                disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">TRUE</div>
                                         <i className="fas fa-times ats-times ats-graded-icon col-1"></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-question-choice ats-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">FALSE</div>
                                         <i className="fas fa-check ats-check ats-graded-icon col-1"></i>
                                     </label>
                                 </li>
                             </>
                         }
                         {
                             userAnswer === false &&
                             <>
                                 <li className="list-group-item ats-question-choice ats-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">TRUE</div>
                                         <i className="fas fa-check ats-check ats-graded-icon col-1"></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-question-choice ats-wrong-active">
                                     <label className="ats-question-label row">
                                         <input type="radio"
                                                checked
                                                disabled
                                                className="ats-question-input col-1"/>
                                         <div className="col-10">FALSE</div>
                                         <i className="fas fa-times ats-times ats-times ats-graded-icon col-1"></i>
                                     </label>
                                 </li>
                             </>
                         }


                     </ul>
                 </>

             }
             <br/>
             <div>Your Answer:
                 {
                     userAnswer !== null &&
                     <> {JSON.stringify(userAnswer)}</>
                 }
             </div>
             <br/>
             <button onClick={() => setGraded(true)}
                     className="ats-grade-btn">Grade</button>

         </div>
     )
}

export default TrueFalseQuestion;