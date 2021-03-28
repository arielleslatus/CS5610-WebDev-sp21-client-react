import React from 'react';

const ImageWidget = (editing, widget, setCurrentWidget) => {
    return (
        <div>
            {JSON.stringify(editing)}
            {
                editing &&
                <div>
                    Hello Image
                </div>
            }
        </div>
    )
}

export default ImageWidget;