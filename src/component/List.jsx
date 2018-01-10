import React from 'react'
import PropTypes from 'prop-types'

function List(props) {
    return <li onClick={props.click} style={{ textDecoration: props.complete ? 'line-through' : '' }}>{props.text}</li>
}

List.propTypes = {
    click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
}

export default List
