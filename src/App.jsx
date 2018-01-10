import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import appReducers from './redux/reducer/index'

import Container from './container/Container'

const store = createStore(appReducers, applyMiddleware(logger))

function App() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    )
}

render(<App />, document.getElementById('root'))
