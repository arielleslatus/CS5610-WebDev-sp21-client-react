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
            <div>
                <div className="row ats-title-row">
                    <div className="col-11">
                        <h2 className="ats-category-title">Topics</h2>
                    </div>
                    <div className="col-1">
                        <i onClick={() => createTopic(lessonId)}
                           className="fas fa-plus fa-2x float-right ats-add-btn"></i>
                    </div>
                </div>

                <ul className="nav nav-pills ats-unordered-pills">
                    {
                        topics.map(topic =>
                                       <EditableItem
                                           key={topic._id}
                                           to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                           updateItem={updateTopic}
                                           deleteItem={deleteTopic}
                                           item={topic}
                                           itemId={topicId}
                                           type={"topic"}/>
                        )
                    }
                </ul>

            </div>

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
    clearTopics: () => {
        dispatch({type: "CLEAR_TOPICS"})
        dispatch({type: "CLEAR_WIDGETS"})
    }


})

export default connect(stpm, dtpm)(TopicPills)