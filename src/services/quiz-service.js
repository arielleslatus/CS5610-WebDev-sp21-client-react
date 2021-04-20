const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const createTopic = (lessonId, topic) => {}

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`)
        .then(response => response.json());



const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())


const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        //.then(result => console.log(result))


const findAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json());
        //.then(result => console.log(result))


export const updateTopic = (topicId, topic) => {}

export const deleteTopic = (topicId) => {}


const api = {
    //createTopic,
    findAllQuizzes,
    findQuizById,
    submitQuiz,
    findAttemptsForQuiz
    //updateTopic,
    //deleteTopic
}

export default api