import {updateCourse} from "../services/course-service";

const initialState = {
    modules: [
        {title: 'CS5610', _id: '123'},
        {title: 'CS5310', _id: '234'},
        {title: 'CS5002', _id: '345'}
    ]
}

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newModule = {
                title: "New Module",
                _id: (new Date().getTime())
            }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    newModule
                ]
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    if (module._id !== action.moduleToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    } else {
                        return module
                    }
                })
            }
        default:
            return state

    }
}

export default ModuleReducer