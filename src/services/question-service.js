const QUIZZES_URL = 'http://localhost:3001/api/quizzes';
const QUESTIONS_URL = 'http://localhost:3001/api/questions';

const findQuestionsForQuiz = (qzid) =>
    fetch(`${QUIZZES_URL}/${qzid}/questions`)
        .then(response => response.json())




const api = {
    findQuestionsForQuiz
}

export default api;