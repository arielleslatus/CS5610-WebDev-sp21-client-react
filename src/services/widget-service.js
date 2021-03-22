

const createWidget = (topicId, widget) =>
        fetch(`https://wbdv-sp21-slatus-java.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`https://wbdv-sp21-slatus-java.herokuapp.com/api/topics/${topicId}/widgets`)
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`https://wbdv-sp21-slatus-java.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-sp21-slatus-java.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


const api = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default api