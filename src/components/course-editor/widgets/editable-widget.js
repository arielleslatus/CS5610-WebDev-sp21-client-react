import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const EditableWidget = ({widget, currentWidget, setCurrentWidget, editing, key, updateWidget, deleteWidget}) => {
    return(
        <div>
            {
                editing &&
                <>
                    <h2>{currentWidget.type}</h2>

                    <i onClick={() => deleteWidget(widget)}
                       className="fas fa-trash float-right">

                    </i>
                    <i onClick={() => {
                        setCurrentWidget({})
                        updateWidget(currentWidget)}}
                       className="fas fa-check float-right">
                    </i>
                    <select onChange={(e) => {
                        setCurrentWidget(widget => ({...widget, type: e.target.value}))
                        updateWidget(currentWidget)}}
                            className="form-control"
                            value={currentWidget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    {
                        currentWidget.type === "HEADING" &&
                        <>
                            <HeadingWidget
                                editing={editing}
                                widget={currentWidget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                    {
                        currentWidget.type === "PARAGRAPH" &&
                        <>
                            <ParagraphWidget
                                editing={editing}
                                widget={currentWidget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                </>
            }
            {
                !editing &&
                <>

                    <i onClick={() => setCurrentWidget(widget)}
                       className="fas fa-cog fa-2x float-right">

                    </i>
                    {
                        widget.type === "HEADING" &&
                        <>
                            <HeadingWidget
                                editing={editing}
                                widget={widget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                    {
                        widget.type === "PARAGRAPH" &&
                        <>
                            <ParagraphWidget
                                editing={editing}
                                widget={widget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                </>

            }


        </div>
    )
}

export default EditableWidget