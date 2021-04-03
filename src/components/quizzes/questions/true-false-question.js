import React, {useState} from 'react';
import './question-style.css'

const TrueFalseQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const [graded, setGraded] = useState(false);
     return(
         <div>
             {
                 graded === false &&
                 <>
                     <h4>{question.question}</h4>
                     <ul className="list-group">
                         <li className="list-group-item">
                             <label>
                                 <input type="radio"
                                        onClick={() => setUserAnswer(true)}
                                        name={question._id}/>
                                 True
                             </label>
                         </li>
                         <li className="list-group-item">
                             <label>
                                 <input type="radio"
                                        onClick={() => setUserAnswer(false)}
                                        name={question._id}/>
                                 False
                             </label>
                         </li>
                     </ul>
                 </>
             }
             {
                 graded === true && JSON.stringify(userAnswer) === question.correct &&
                 <>
                     <h4>
                         {question.question}
                         <i className="fas fa-check"></i>
                     </h4>
                     <ul className="list-group">
                         {
                             userAnswer == true &&
                             <>
                                 <li className="list-group-item ats-active">
                                     <label>
                                         <input type="radio"
                                                checked disabled/>
                                         True
                                         <i className="fas fa-check"></i>

                                     </label>
                                 </li>
                                 <li className="list-group-item">
                                     <label>
                                         <input type="radio" disabled/>
                                         False
                                     </label>

                                 </li>
                             </>
                         }
                         {
                             userAnswer === false &&
                             <>
                                 <li className="list-group-item">
                                     <label>
                                         <input type="radio" disabled/>
                                         True
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-active">
                                     <label>
                                         <input type="radio"
                                                checked disabled/>
                                         False
                                         <i className="fas fa-check"></i>

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
                         {question.question}
                         <i className="fas fa-times"></i>
                     </h4>
                     <ul className="list-group">
                         {
                             userAnswer == true &&
                             <>
                                 <li className="list-group-item ats-wrong-active">
                                     <label>
                                         <input type="radio"
                                                checked
                                                disabled/>
                                         True
                                         <i className="fas fa-times"></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-active">
                                     <label>
                                         <input type="radio"
                                                disabled/>
                                         False
                                         <i className="fas fa-check"></i>
                                     </label>
                                 </li>
                             </>
                         }
                         {
                             userAnswer === false &&
                             <>
                                 <li className="list-group-item ats-active">
                                     <label>
                                         <input type="radio"
                                                disabled/>
                                         True
                                         <i className="fas fa-check"></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item ats-wrong-active">
                                     <label>
                                         <input type="radio"
                                                checked
                                                disabled/>
                                         False
                                         <i className="fas fa-times"></i>
                                     </label>
                                 </li>
                             </>
                         }


                     </ul>
                 </>

             }
             <div>Your Answer:
                 {
                     userAnswer !== null &&
                     JSON.stringify(userAnswer)
                 }
             </div>
             <button onClick={() => setGraded(true)}>Grade</button>

         </div>
     )
}

export default TrueFalseQuestion;