import React from 'react'

const HeadingWidget = ({widget, setCurrentWidget, editing}) =>
   {
       //console.log(widget.text)
       return(<div>
           {
               editing &&
               <>
                   <h6>{widget.text}</h6>
                   <input onChange={(e) => setCurrentWidget(widget => ({...widget, text: e.target.value}))}
                          defaultValue={widget.text}
                          className="form-control"/>
                   <select onChange={(e) => setCurrentWidget(widget => ({...widget, size: parseInt(e.target.value)}))} value={widget.size}
                           className="form-control">
                       <option value={1}>Heading 1</option>
                       <option value={2}>Heading 2</option>
                       <option value={3}>Heading 3</option>
                       <option value={4}>Heading 4</option>
                       <option value={5}>Heading 5</option>
                       <option value={6}>Heading 6</option>
                   </select>
               </>
           }
           {
               !editing &&
               <>
                   {!editing && widget.size === 1 && <h1>{widget.text}</h1>}
                   {!editing && widget.size === 2 && <h2>{widget.text}</h2>}
                   {!editing && widget.size === 3 && <h3>{widget.text}</h3>}
                   {!editing && widget.size === 4 && <h4>{widget.text}</h4>}
                   {!editing && widget.size === 5 && <h5>{widget.text}</h5>}
                   {!editing && widget.size === 6 && <h6>{widget.text}</h6>}
               </>
           }






    </div>)}




export default HeadingWidget