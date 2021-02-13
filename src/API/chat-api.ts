let wsChanel: WebSocket

export const chatAPI = {
    createChanel (getMessages, changeStatus, closeHandler) {
        wsChanel && wsChanel.removeEventListener('close', closeHandler)
        wsChanel && wsChanel.removeEventListener('open', changeStatus)
        wsChanel && wsChanel.close()
        wsChanel && wsChanel.removeEventListener('message', getMessages)
        wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        wsChanel.addEventListener('close', closeHandler)
        wsChanel.addEventListener('open', changeStatus)
        wsChanel.addEventListener('message', getMessages)
    },
    send (message) {
        wsChanel.send(message)
    },
    disconnect(getMessages, changeStatus, closeHandler) {
        wsChanel && wsChanel.removeEventListener('close', closeHandler)
        wsChanel && wsChanel.removeEventListener('open', changeStatus)
        wsChanel && wsChanel.close()
        wsChanel && wsChanel.removeEventListener('message', getMessages)
    }
}