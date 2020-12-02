export type profile = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contacts
    photos: photos
}

export type contacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photos = {
    small: string | null
    large: string | null
}

export type user = {
    id: number
    name: string
    status?: string
    photos: photos
    followed: boolean
}

export type authDataType = {
    id?: number | null
    login?: string | null
    email?: string | null
}

export type dialogDataType = {
    id: number
    message: string
}

export type dialogUserDataType = {
    name: string
    id: number
}