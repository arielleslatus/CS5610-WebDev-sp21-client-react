import React from 'react'
import {connect} from 'react-redux'

const ModuleList = ({modules=[],
                    createModule}) =>

        <div>

            <h2>Module List</h2>
            <ul className="list-group">
                {
                    modules.map(module =>
                        <li className="list-group-item">
                            {module.title}
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={createModule}
                       className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>

const stpm = (state) => ({
    modules: state.moduleReducer.modules

})



const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    }
})

export default connect(stpm, dtpm)(ModuleList)