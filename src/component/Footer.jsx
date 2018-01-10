import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    if (props.ownFilter === props.now) {
        return <span>{props.ownFilter}</span>
    }
    return (
        <button onClick={props.click}>{props.ownFilter}</button>
    )
}

Footer.propTypes = {
    click: PropTypes.func.isRequired,
    now: PropTypes.string.isRequired,
    ownFilter: PropTypes.string.isRequired,
}

export default Footer
