import React from 'react';

const ImageWidget = ({editing, widget, setCurrentWidget}) => {
    return(
        <div>
            {
                editing &&
                <div>
                    URL
                    <input value={widget.url} className="form-control"/>
                    Width
                    <input value={widget.width} className="form-control"/>
                    Height
                    <input value={widget.height} className="form-control"/>
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

export default ImageWidget;