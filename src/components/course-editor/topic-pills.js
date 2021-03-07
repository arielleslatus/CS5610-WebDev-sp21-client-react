import React, {useEffect} from 'react'
import {connect, Provider} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from 'react-router-dom'
import topicService, {createTopic} from '../../services/topic-service'


const TopicPills = ({topics = [],
                        createTopic,
                        findTopicsForLesson,
                        updateTopic,
                        deleteTopic,
                        clearTopics
                    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (moduleId !== undefined && typeof moduleId !== undefined &&
            lessonId !== undefined && typeof lessonId !== undefined) {
            findTopicsForLesson(lessonId)
        } else {
            clearTopics()
        }
    }, [moduleId, lessonId])
    return (
            <ul className="nav nav-pills ats-unordered-pills">
                {
                    topics.map(topic =>
                                    <li className="nav-item ats-nav-item"
                                        key={topic._id}>
                                        <EditableItem
                                            to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                            updateItem={updateTopic}
                                            deleteItem={deleteTopic}
                                            active={topic._id === topicId}
                                            item={topic}
                                            isModule={false}/>
                                    </li>

                    )
                }
                <li className="ats-nav-item">
                    <i onClick={() => createTopic(lessonId)}
                       className="fas fa-plus fa-2x ats-plus-icon"></i>
                </li>
            </ul>
    )
}

const stpm = (state) => {
    return ({
        topics: state.topicReducer.topics
    })
}

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
            if (lessonId !== undefined) {
                topicService.createTopic(lessonId, {title: 'New Topic'})
                    .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))
            }
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updatedTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    clearTopics: () => dispatch({type: "CLEAR_TOPICS"})
})

export default connect(stpm, dtpm)(TopicPills)