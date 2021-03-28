import React from 'react';
import {useState} from 'react';

const ListWidget = ({editing, widget, setCurrentWidget}) => {
    return(
        <div>
            {
                editing &&
                <div>
                    {
                        widget.ordered &&
                        <input className="ats-check-box"
                               type="checkbox"
                               checked
                               onChange={() => setCurrentWidget({...widget, ordered: !widget.ordered}) }/>
                    }
                    {
                        !widget.ordered &&
                        <input className="ats-check-box"
                               type="checkbox"
                               onChange={() => setCurrentWidget({...widget, ordered: !widget.ordered}) }/>
                    }
                    Ordered
                    <br/>
                    List Items
                    <textarea onChange={(e) => setCurrentWidget({...widget, text: e.target.value})}
                              rows={10}
                              defaultValue={widget.text}
                              className="form-control">
                    </textarea>
                </div>
            }
            {
                !editing &&
                <div>
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }

                </div>
            }
        </div>
    )
}

export default ListWidget;