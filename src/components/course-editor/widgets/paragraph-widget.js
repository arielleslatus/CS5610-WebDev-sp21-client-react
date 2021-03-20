import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setCurrentWidget, editing, key}) => {
    return(
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setCurrentWidget({...widget, text: e.target.value})}
                    value={widget.text}
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