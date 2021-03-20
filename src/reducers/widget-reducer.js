import {CREATE_WIDGET_FOR_TOPIC, FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET, DELETE_WIDGET} from "../components/actions/widget-actions";

const initialState = {
    widgets: []
}

const WidgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_WIDGET_FOR_TOPIC:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.updatedWidget.id) {
                        return action.updatedWidget
                    } else {
                        return widget
                    }
                })
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget.id !== action.widgetToDelete.id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        default:
            return state
    }
}

export default WidgetReducer