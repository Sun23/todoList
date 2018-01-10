import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { visible } from '../redux/actions/index'

import ListCo from '../component/List'

class List extends Component {
    constructor(props) {
        super(props)
        this.doIt = this.doIt.bind(this)
    }
    doIt(id) {
        this.props.dispatch(visible(id))
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(item => <ListCo {...item} key={item.id} click={() => this.doIt(item.id)} />)
                }
            </ul>
        )
    }
}

const getTodos = (arr, filter) => {
    switch (filter) {
    case 'ALL': {
        return arr
    }
    case 'COMPLETED': {
        return arr.filter(v => v.complete)
    }
    case 'UNDO': {
        return arr.filter(v => !v.complete)
    }
    default: return arr
    }
}

const mapStateToProps = state => ({ todos: getTodos(state.todos, state.filter) })

List.propTypes = {
    todos: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(List)
