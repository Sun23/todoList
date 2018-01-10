import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../component/Header'

import { addTodo } from '../redux/actions/index'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.addTodoList = this.addTodoList.bind(this)
    }
    addTodoList(text) {
        this.props.dispatch(addTodo(text))
    }
    render() {
        return <Header addTodo={(text) => { this.addTodoList(text) }} />
    }
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default connect()(AddTodo)
