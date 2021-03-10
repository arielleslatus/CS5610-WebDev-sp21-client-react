import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = ({item, itemId="",
                      updateItem,
                      deleteItem,
                      to,
                      type=""}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <li className={`ats-editable-item 
            ${type === 'module' ? 'list-group-item' : 'nav-item ats-nav-item'}
            ${item._id === itemId ? 'active' : '' }
            ${editing ? 'active' : ''}
            `}>
            {
                !editing &&
                <div className="nav-link">
                    <Link to={to} className={`${item._id === itemId ? 'ats-link-active' : 'ats-link'}`}>

                        <label className="ats-item-title">{item.title}</label>

                    </Link>

                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit ats-edit-icon float-right"></i>

                </div>
            }
            {
                editing &&
                    <div className="nav-link container">
                        <div className="row ats-edit-row">
                            <input
                                type="text"
                                onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                                value={itemCache.title}
                                className="form-control ats-edit-title col-8"/>
                            <div className="d-flex justify-content-center col-2">
                                <i onClick={() => deleteItem(item)}
                                   className="fas fa-times ats-editing-icon"></i>
                            </div>
                            <div className="d-flex justify-content-center col-2">
                                <i onClick={() => {
                                    setEditing(false)
                                    updateItem(itemCache)}}
                                   className="fas fa-check ats-editing-icon"></i>
                            </div>
                        </div>






                    </div>


            }
        </li>
    )
}


export default EditableItem