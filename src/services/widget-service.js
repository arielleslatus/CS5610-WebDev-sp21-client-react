const TOPIC_URL = process.env.REACT_APP_TOPIC_URL
const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

const createWidget = (topicId, widget) =>
        fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
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