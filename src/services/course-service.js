const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001063697/courses"

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const createCourse = (course) =>
     fetch(COURSES_URL,  {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(course)
    }).then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`,
          {method: 'DELETE'})
        .then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`,{
        method:'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findCourseById = (courseID) =>
    fetch(`${COURSES_URL}/${courseID}`)
        .then(response => response.json())

const api = {
    findAllCourses: findAllCourses,
    createCourse: createCourse,
    deleteCourse: deleteCourse,
    updateCourse: updateCourse,
    findCourseById: findCourseById
}

export default api;