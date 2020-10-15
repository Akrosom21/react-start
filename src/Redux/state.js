// import avatar001 from "../img/ava.jfif";
// import avatar002 from "../img/ava002.jfif";
// import profileReducer from './profileReducer';
// import messagesReducer from './messagesReduser';
// const addPost = 'ADD-POST';
// const addSymbol = 'ADD-SYMBOL';
// const addDialogSymbol = 'ADD-DIALOG-SYMBOL';
// const addDialogMessage = 'ADD-DIALOG-MESSAGE';
// let store = {
//     _state: {
//         profilePage: {
//               postData: [
//                 { message: "Hello", avatar: avatar001 },
//                 { message: "It's my first post", avatar: avatar002 },
//                 { message: "How's it going?", avatar: avatar001 },
//                 { message: "Cool site!", avatar: avatar002 },
//               ],
//               postSymbol: ''
//         },
//         messagesPage: {
//             dialogData: [
//                 {message: 'Hello'},
//                 {message: 'How are you?'},
//                 {message: 'Where are you from?'}
//               ],
//               dialogSymbol: '',
//               userData: [
//                 {name: 'Andrey', id: 1},
//                 {name: 'Anna', id: 2},
//                 {name: 'Kiril', id: 3},
//                 {name: 'Sasha', id: 4}
//               ]
//         }
//     },
//     _rerender() {},
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._rerender = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//
//         this._rerender(this._state);
//     }
// }
//
// export default store;