import React from 'react'
import './widgets.template.client.css'

const ParagraphWidget = ({widget, setCurrentWidget, editing, key}) => {
    return(
        <div className="ats-paragraph-widget">
            {
                editing &&
                <textarea onChange={(e) => setCurrentWidget({...widget, text: e.target.value})}
                          defaultValue={widget.text}
                          className="form-control"></textarea>

            }
            {
                !editing &&
                <p>{widget.text}</p>
            }
        </div>
    )
}

export default ParagraphWidget