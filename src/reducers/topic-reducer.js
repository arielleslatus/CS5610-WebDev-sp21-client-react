const initialState = {
    topics: []
}

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topic: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.updatedTopic._id) {
                        return action.updatedTopic
                    } else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if (topic._id !== action.topicToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "CLEAR_TOPICS":
            return {
                ...state,
                topics: []
            }
        default:
            return state

    }
}

export default TopicReducer