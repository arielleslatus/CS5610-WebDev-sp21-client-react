import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
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
        if (topicId !== undefined && typeof topicId !== undefined &&
            lessonId !== undefined && typeof lessonId !== undefined &&
            moduleId !== undefined && typeof moduleId !== undefined) {
            findWidgetsForTopic(topicId)
        } else {
            clearWidgets()
        }
    }, [topicId])

    return(
        <div>
            <h1>Widget List {currentWidget.id}</h1>
            <ul className="list-group">
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

                        {/*{*/}
                        {/*    widget.type === "HEADING" &&*/}
                        {/*    <HeadingWidget*/}
                        {/*        setCurrentWidget={setCurrentWidget}*/}
                        {/*        editing={currentWidget.id === widget.id}*/}
                        {/*        widget={widget}/>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    widget.type === "PARAGRAPH" &&*/}
                        {/*    <ParagraphWidget*/}
                        {/*        setCurrentWidget={setCurrentWidget}*/}
                        {/*        editing={currentWidget.id === widget.id}*/}
                        {/*        widget={currentWidget}/>*/}
                        {/*}*/}
                    </li>)
                }
                <li className="ats-nav-item list-group-item">
                    <i onClick={() => createWidget(topicId)}
                       className="fas fa-plus fa-2x ats-plus-icon">
                    </i>
                </li>
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


