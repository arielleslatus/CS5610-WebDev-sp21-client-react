import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = ({item,
                      updateItem,
                      deleteItem,
                      active=false,
                      to,
                      isModule=false}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <div className="ats-editable-item">
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : '' }`} to={to}>
                        <label className="ats-item-title">{item.title}</label>
                        <i onClick={() => setEditing(true)}
                           className="fas fa-edit ats-edit-icon"></i>
                    </Link>
                </>
            }
            {
                editing &&
                <div className={`${isModule ? '' : 'form-inline'}`}>

                    <div className={`nav-link  ${active ? 'active' : '' }`}>
                        <input
                            type="text"
                            onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                            value={itemCache.title}
                            className="form-control ats-edit-title"/>


                            <i onClick={() => {
                                setEditing(false)
                                updateItem(itemCache)}}
                               className="fas fa-check ats-editing-icon"></i>
                            <i onClick={() => deleteItem(item)}
                               className="fas fa-times ats-editing-icon"></i>

                    </div>


                </div>
            }
        </div>
    )
}


export default EditableItem