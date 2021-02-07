import axios from "axios";
import {photos, profile, user} from "../types/types";

let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd784397e-0c0b-4641-ac0d-756f809844a5'
    }
})

// types
type getUsersType = {
    items: Array<user>
    totalCount: number
    error: string | null
}
type followType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type updateStatusType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type updatePhotoType = {
    data: {photos: photos}
    resultCode: number
    messages: Array<string>
}
type updateProfileType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type setAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type loginType = {
    resultCode: number
    messages: Array<string>
    data: {userID: number}
}
type logoutType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type captchaType = {
    url: string
}

//API
export const userAPI = {
    getUsersPage(page: number, usersInPage: number, term: string, friend: boolean | string) {
        return axiosInstance.get<getUsersType>(`users?page=${page}&count=${usersInPage}&term=${term}&friend=${friend}`)
            .then(response => response.data)
    },

    follow(userID: number) {
        return axiosInstance.post<followType>('follow/'+userID)
            .then(response => response.data)
    },

    unfollow(userID: number) {
        return axiosInstance.delete<followType>('follow/'+userID)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(withRouterUserID: number) {
        return axiosInstance.get<profile>('profile/' + withRouterUserID)
            .then(response => response.data)
    },
    getProfileStatus(userID: number) {
        return axiosInstance.get<string>('profile/status/' + userID)
            .then(response => response.data)
    },
    updateProfileStatus(status: string) {
        return axiosInstance.put<updateStatusType>('profile/status/', {status: status})
    },
    updateProfilePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return axiosInstance.put<updatePhotoType>('profile/photo', formData)
            .then(response => response.data)
    },
    updateProfile(profile: profile) {
        return axiosInstance.put<updateProfileType>('profile', profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    setAuth() {
        return axiosInstance.get<setAuthType>('auth/me')
            .then(response => response.data)
    },
    login(email:string, password: string, rememberMe: boolean, captcha: null | string) {
        return axiosInstance.post<loginType>('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return axiosInstance.delete<logoutType>('auth/login')
            .then(response => response.data)
    }
}

export const captchaAPI = {
    getCaptchaUrl() {
        return axiosInstance.get<captchaType>('security/get-captcha-url')
            .then(response => response.data)
    }
}