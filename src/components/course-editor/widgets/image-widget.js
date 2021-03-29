import React from 'react';

const ImageWidget = ({editing, widget, setCurrentWidget}) => {
    return(
        <div>
            {
                editing &&
                <div>
                    URL
                    <input onChange={(e) => setCurrentWidget({...widget, src: e.target.value})}
                           defaultValue={widget.src}
                           className="form-control"/>
                    Width
                    <input onChange={(e) => setCurrentWidget({...widget, width: e.target.value})}
                           defaultValue={widget.width}
                           className="form-control"/>
                    Height
                    <input onChange={(e) => setCurrentWidget({...widget, height: e.target.value})}
                           defaultValue={widget.height}
                           className="form-control"/>
                </div>
            }
            {
                !editing &&
                <div>
                    <img src={widget.src} width={widget.width} height={widget.height}/>
                </div>
            }
        </div>
    )
}

export default ImageWidget;