export const ADD_LIST = 'ADD_LIST'
export const HAVE_DONE = 'HAVE_DONE'
export const GET_LIST = 'GET_LIST'
export const VISIBLE = 'VISIBLE'
export const SET_VISIBILITY = 'SET_VISIBILITY'

let count = -1

export const addTodo = function addTodo(text) {
    count += 1
    return {
        type: ADD_LIST,
        text,
        id: count,
    }
}

export const visible = function visible(id) {
    return {
        type: VISIBLE,
        id,
    }
}

export const setVisiblity = filter => ({
    type: SET_VISIBILITY,
    filter,
})

// export const setVisiblity = function setVisiblity(filter) {
//     return {
//         type: SET_VISIBILITY,
//         filter,
//     }
// }
