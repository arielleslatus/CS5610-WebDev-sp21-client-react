import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState(null);
    const [graded, setGraded] = useState(false);
     return(
         <div>
             {
                 graded === false &&
                 <>
                     <h4>{question.question}</h4>
                     <p>{question.correct}</p>
                     <p>{JSON.stringify(userAnswer)}</p>

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
                 graded === true &&
                 <>
                     {
                         JSON.stringify(userAnswer) === question.correct &&
                         <>
                             <h4>
                                 {question.question}
                                 <i className="fas fa-check"></i>
                             </h4>
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
                         JSON.stringify(userAnswer) !== question.correct &&
                         <>
                             <h4>
                                 {question.question}
                                 <i className="fas fa-times"></i>
                             </h4>
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
                 </>
             }


             <button onClick={() => setGraded(true)}>Grade</button>

         </div>
     )
}

export default TrueFalseQuestion;