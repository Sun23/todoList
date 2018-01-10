import { combineReducers } from 'redux'
import { ADD_LIST, VISIBLE, SET_VISIBILITY } from '../actions/index'

function todos(state = [], action) {
    switch (action.type) {
    case ADD_LIST: {
        return [
            ...state,
            {
                text: action.text,
                complete: false,
                id: action.id,
            },
        ]
    }
    case VISIBLE: {
        return state.map(item => (item.id === action.id ? { text: item.text, id: action.id, complete: !item.complete } : item))
    }
    default: return state
    }
}

function filter(state = 'ALL', action) {
    switch (action.type) {
    case SET_VISIBILITY: {
        return action.filter
    }
    default: return state
    }
}

export default combineReducers({ todos, filter })
