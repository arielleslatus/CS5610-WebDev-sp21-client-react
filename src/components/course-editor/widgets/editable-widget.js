import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const EditableWidget = ({widget, currentWidget, setCurrentWidget, editing, key, updateWidget, deleteWidget}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <i onClick={() => {
                        setCurrentWidget({})
                        updateWidget(currentWidget)
                    }}
                       className="fas fa-check float-right ats-widget-btn">
                    </i>
                    <i onClick={() => deleteWidget(widget)}
                       className="fas fa-trash float-right ats-widget-btn">

                    </i>
                    <select onChange={(e) => {
                        setCurrentWidget(widget => ({...widget, type: e.target.value}))
                        updateWidget(currentWidget)
                    }}
                            className="form-control ats-widget-type-picker"
                            value={currentWidget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image</option>
                        <option value="LIST">List</option>
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
                    {
                        currentWidget.type === "LIST" &&
                        <>
                            <ListWidget
                                editing={editing}
                                widget={currentWidget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                    {
                        currentWidget.type === "IMAGE" &&
                        <>
                            <ImageWidget
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
                       className="fas fa-cog float-right ats-widget-btn">
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
                    {
                        widget.type === "LIST" &&
                        <>
                            <ListWidget
                                editing={editing}
                                widget={widget}
                                setCurrentWidget={setCurrentWidget}/>
                        </>
                    }
                    {
                        widget.type === "IMAGE" &&
                        <>
                            <ImageWidget
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