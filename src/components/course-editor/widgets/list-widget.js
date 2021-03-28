import React from 'react';

const ListWidget = ({editing, widget, setCurrentWidget}) => {
    return(
        <div>
            {
                editing &&
                <div>
                    <input type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea rows={10} className="form-control">

                    </textarea>
                </div>
            }
            {
                !editing &&
                <div>
                    <p>{widget.text}</p>
                </div>
            }
        </div>
    )
}

export default ListWidget;