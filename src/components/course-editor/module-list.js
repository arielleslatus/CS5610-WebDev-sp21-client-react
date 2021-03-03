import React from 'react'
import {connect, Provider} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from 'react-router-dom'

const ModuleList = ({
                        modules = [],
                        createModule,
                        updateModule,
                        deleteModule
                    }) => {

    const {layout, courseId, moduleId} = useParams();
    return (
        <div>
            <h2>Module List</h2>
            <ul>
                <li>layout: {layout}</li>
                <li>course id: {courseId}</li>
                <li>module id: {moduleId}</li>
            </ul>
            <ul className="list-group">
                {
                    modules.map(module =>
                                    <li className="list-group-item">
                                        <EditableItem
                                            to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                            updateItem={updateModule}
                                            deleteItem={deleteModule}
                                            item={module}/>
                                    </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={createModule}
                       className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}
const stpm = (state) => ({
    modules: state.moduleReducer.modules

})

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE", updatedModule: newItem})
    },
    deleteModule: (moduleToDelete) => {
        dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete})
    }
})

export default connect(stpm, dtpm)(ModuleList)