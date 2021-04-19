import React, {useEffect, useState} from 'react';
import PublicContent from "./public-content";
import AdminContent from "./admin-content";

const Profile = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch("http://localhost:3001/api/profile")
            .then(resposne => resposne.json())
            .then(currentUser => setUser(currentUser))
    })
    return(
        <div>
            <h1>Profile</h1>
            <PublicContent/>
            {
                user.type == "ADMIN" &&
                <AdminContent/>
            }
        </div>
    )
}

export default Profile;