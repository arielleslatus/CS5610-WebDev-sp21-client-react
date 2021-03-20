import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom'
import '../course-editor.template.client.css'
import '../../component-style.css'
import {connect} from 'react-redux'
import widgetActions from "../../actions/widget-actions";




const WidgetList = ({widgets = [], createWidget, findWidgetsForTopic, updateWidget, deleteWidget}) => {
    const {topicId} = useParams();
    const [allWidgets, setAllWidgets] = useState([])
    const [currentWidget, setCurrentWidget] = useState({})

    useEffect(() => {
        if (topicId !== undefined && typeof topicId !== undefined) {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return(
        <div>
            <h1>Widget List {currentWidget.id}</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>

                    <li key={widget.id} className="list-group-item">
                        {
                            currentWidget.id === widget.id &&
                            <>
                                <i onClick={() => deleteWidget(widget)}
                                   className="fas fa-trash float-right">

                                </i>
                                <i onClick={() => updateWidget(widget)}
                                   className="fas fa-check float-right">

                                </i>
                            </>
                        }
                        {
                            currentWidget.id !== widget.id &&
                            <i onClick={() => setCurrentWidget(widget)}
                               className="fas fa-cog fa-2x float-right">

                            </i>
                        }

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                setCurrentWidget={setCurrentWidget}
                                editing={currentWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                setCurrentWidget={setCurrentWidget}
                                editing={currentWidget.id === widget.id}
                                widget={currentWidget}/>
                        }
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
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete)
})

export default connect(stpm, dtpm)(WidgetList)


