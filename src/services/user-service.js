const USER_API = "http://localhost:8080/api";

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

const publicProfile = (userId) => {
    return fetch(`${USER_API}/profile/${userId}`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};


const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

const register = (credentials) => {
    return fetch(`${USER_API}/register`, {
        method: "POST",
        //credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

const logout = () => {};

const api = {
    register,
    login,
    logout,
    profile,
    publicProfile
};

export default api;