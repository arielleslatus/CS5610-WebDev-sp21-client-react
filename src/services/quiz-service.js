const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const createTopic = (lessonId, topic) => {}

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`)
        .then(response => response.json());

const findQuizById = (qid) => {
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export const updateTopic = (topicId, topic) => {}

export const deleteTopic = (topicId) => {}


const api = {
    //createTopic,
    findAllQuizzes,
    findQuizById
    //updateTopic,
    //deleteTopic
}

export default api