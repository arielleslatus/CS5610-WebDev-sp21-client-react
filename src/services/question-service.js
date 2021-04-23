// const QUIZZES_URL = 'http://localhost:3001/api/quizzes';
// const QUESTIONS_URL = 'http://localhost:3001/api/questions';
const QUIZZES_URL = 'https://wbdv-sp21-slatus-node-server.herokuapp.com/api/quizzes';
const QUESTIONS_URL = 'https://wbdv-sp21-slatus-node-server.herokuapp.com//api/questions';

const findQuestionsForQuiz = (qzid) =>
    console.log("quiz id: " + qzid)
    fetch(`${QUIZZES_URL}/${qzid}/questions`)
        .then(response => response.json())




const api = {
    findQuestionsForQuiz
}

export default api;