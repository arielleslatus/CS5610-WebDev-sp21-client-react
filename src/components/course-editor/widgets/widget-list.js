import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import '../course-editor.template.client.css'
import '../../component-style.css'
import {connect} from 'react-redux'
import widgetActions from "../../actions/widget-actions";
import EditableWidget from "./editable-widget";

const WidgetList = ({widgets = [], createWidget, findWidgetsForTopic, updateWidget, deleteWidget, clearWidgets}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [allWidgets, setAllWidgets] = useState([])
    const [currentWidget, setCurrentWidget] = useState({})

    useEffect(() => {
        if (topicId !== undefined && typeof topicId !== undefined ) {
            findWidgetsForTopic(topicId)
        } else {
            clearWidgets()
        }
    }, [topicId])

    return (
        <div>
            <div className="row ats-title-row">
                <div className="col-11">
                    <h2 className="ats-category-title">Widgets</h2>
                </div>
                <div className="col-1 ">
                    <i onClick={() => createWidget(topicId)}
                       className="fas fa-plus fa-2x ats-plus-icon float-right ats-add-btn">
                    </i>
                </div>
            </div>
            <ul className="list-group ats-widget-list">
                {
                    widgets.map(widget =>
                                    <li key={widget.id} className="list-group-item">
                                        <EditableWidget
                                            key={widget.id}
                                            widget={widget}
                                            currentWidget={currentWidget}
                                            setCurrentWidget={setCurrentWidget}
                                            editing={currentWidget.id === widget.id}
                                            updateWidget={updateWidget}
                                            deleteWidget={deleteWidget}/>
                                    </li>)
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return ({
        widgets: state.widgetReducer.widgets
    })
}

const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    clearWidgets: () => dispatch({type: "CLEAR_WIDGETS"})

})

export default connect(stpm, dtpm)(WidgetList)


