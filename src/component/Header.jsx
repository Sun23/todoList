import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
    }
    addTodo() {
        const text = this.input.value
        this.props.addTodo(text)
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.input = input }} />
                <button onClick={this.addTodo}>add</button>
            </div>
        )
    }
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default Header

