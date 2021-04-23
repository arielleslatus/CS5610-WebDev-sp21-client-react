import React, {useEffect, useState} from 'react';
import PublicContent from "./public-content";
import AdminContent from "./admin-content";
import userService from '../../services/user-service';
import {useParams} from 'react-router-dom';
import PrivateContent from "./private-content";

const Profile = () => {
    const {userId} = useParams()
    const [loggedInUser, setLoggedInUser] = useState({})
    const [otherUser, setOtherUser] = useState(null)
    useEffect(() => {
        // if (userId) {
        //     userService.publicProfile(userId)
        //         .then(currentProfile => setLoggedInUser(currentProfile))
        // } else {
            userService.profile()
                .then(currentLoggedInUser => setLoggedInUser(currentLoggedInUser))
            if(userId) {
                userService.publicProfile(userId)
                    .then(otherUser => setOtherUser(otherUser))
            }

        //}
    }, [])
    return(
        <div>
            <h1>Profile</h1>
            {JSON.stringify(loggedInUser)}
            <PublicContent/>
            {
                loggedInUser && loggedInUser.type == "ADMIN" &&
                <AdminContent/>
            }

            {
                loggedInUser && otherUser && loggedInUser.id === otherUser.id &&
                <PrivateContent/>
            }
            {
                loggedInUser && !otherUser &&
                <PrivateContent/>
            }
        </div>
    )
}

export default Profile;