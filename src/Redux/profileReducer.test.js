import profileReducer, {addPostActionCreator} from "./profileReducer";

let state = {
    postData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "It's my first post"},
        {id: 3, message: "How's it going?"},
        {id: 4, message: "Cool site!"},
    ],
    postSymbol: 'Hello'
}

test('array length should be increased', () => {
    let action = addPostActionCreator()
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(5)
});