import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '68aecce2-a322-47e6-b391-3de797849afd'
    }
})

export const userAPI = {
    getUsers(currentPage, usersInPage) {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersInPage}`)
            .then(response => response.data)
    },

    getUsersPage(page, usersInPage) {
        return axiosInstance.get(`users?page=${page}&count=${usersInPage}`)
            .then(response => response.data)
    },

    follow(userID) {
        return axiosInstance.post('follow/'+userID)
            .then(response => response.data)
    },

    unfollow(userID) {
        return axiosInstance.delete('follow/'+userID)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(withRouterUserID) {
        return axiosInstance.get('profile/' + withRouterUserID)
            .then(response => response.data)
    },
    getProfileStatus(userID) {
        return axiosInstance.get('/profile/status/' + userID)
            .then(response => response.data)
    },
    updateProfileStatus(status) {
        return axiosInstance.put('/profile/status/', {status: status})
    }
}

export const authAPI = {
    setAuth() {
        return axiosInstance.get('auth/me')
            .then(response => response.data)
    },
    login(values) {
        return axiosInstance.post('auth/login', values)
            .then(response => response.data)
    }

}