import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = ({item,
                      updateItem,
                      deleteItem,
                      active=false,
                      to}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <div className="ats-editable-item">
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : '' }`} to={to}>
                        {item.title}
                        <i onClick={() => setEditing(true)}
                           className="fas fa-edit ats-edit-icon"></i>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)}}
                       className="fas fa-check ats-edit-icon"></i>
                    <i onClick={() => deleteItem(item)}
                       className="fas fa-times ats-edit-icon"></i>
                </>
            }
        </div>
    )
}


export default EditableItem