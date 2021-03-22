import widgetService from "../../services/widget-service";

export const CREATE_WIDGET_FOR_TOPIC = "CREATE_WIDGET_FOR_TOPIC"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"

export const createWidget = (dispatch, topicId) => {
    if (topicId !== undefined) {
        widgetService.createWidget(topicId, {type: "HEADING", text: "New Widget", size: 2})
            .then(widget => dispatch({type: CREATE_WIDGET_FOR_TOPIC, widget: widget}))
    }
}

export const findWidgetsForTopic = (dispatch, topicId) => {
    if (topicId !== undefined) {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({type: FIND_WIDGETS_FOR_TOPIC, widgets: widgets}))
    }

}
export const updateWidget = (dispatch, newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
        .then(status => dispatch({type: UPDATE_WIDGET, updatedWidget: newItem}))
}

export const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
        .then(status => dispatch({type: DELETE_WIDGET, widgetToDelete: widgetToDelete}))
}

const widgetActions = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default widgetActions