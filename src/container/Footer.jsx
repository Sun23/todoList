import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setVisiblity } from '../redux/actions'

import FooterCo from '../component/Footer'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(filter) {
        this.props.dispatch(setVisiblity(filter))
    }
    render() {
        return (
            <div>
                <FooterCo ownFilter="ALL" {...this.props} now={this.props.filter} click={() => this.handleClick('ALL')} />
                {' '}
                <FooterCo ownFilter="COMPLETED" {...this.props} now={this.props.filter} click={() => this.handleClick('COMPLETED')} />
                {' '}
                <FooterCo ownFilter="UNDO" {...this.props} now={this.props.filter} click={() => this.handleClick('UNDO')} />
            </div>
        )
    }
}

Footer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}

export default connect(state => state)(Footer)
