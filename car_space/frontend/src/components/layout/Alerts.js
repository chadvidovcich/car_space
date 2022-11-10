import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

    componentDidUpdate(prevProps) {
      const { error, alert, message } = this.props
      if (error !== prevProps.error) {
        if (error.msg.make) { alert.error(`Make: ${error.msg.make.join()}`)}
        if (error.msg.model) { alert.error(`Model: ${error.msg.model.join()}`)}
        if (error.msg.year) { alert.error(`Year: ${error.msg.year.join()}`)}
      }

      if (message !== prevProps.message) {
        if (message.deleteVehicle) {alert.success(message.deleteVehicle)}
        if (message.addVehicle) {alert.success(message.addVehicle)}
      }
    }

  render() {
    return <Fragment />
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))