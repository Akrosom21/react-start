import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd784397e-0c0b-4641-ac0d-756f809844a5'
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
    },
    updateProfilePhoto(file) {
        const formData = new FormData()
        formData.append('image', file)
        return axiosInstance.put('/profile/photo', formData)
            .then(response => response.data)
    }
}

export const authAPI = {
    setAuth() {
        return axiosInstance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe) {
        return axiosInstance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return axiosInstance.delete('auth/login')
            .then(response => response.data)
    }

}