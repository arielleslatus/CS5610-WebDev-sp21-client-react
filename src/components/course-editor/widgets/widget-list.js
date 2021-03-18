import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom'
import '../course-editor.template.client.css'
import '../../component-style.css'


const WidgetList = () => {

    const {topicId} = useParams();
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const createWidget = () => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify({type: "HEADING", size: "2", text: "New Widget"}),
            headers: {
                "content-type": 'application/json'
            }
            })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    return(
        <div>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li key={widget.id} className="list-group-item">
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget widget={widget} />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget} />
                        }
                    </li>)
                }
                <li className="ats-nav-item list-group-item">
                    <i onClick={() => createWidget()}
                       className="fas fa-plus fa-2x ats-plus-icon"></i>
                </li>
            </ul>

        </div>
    )
}

export default WidgetList