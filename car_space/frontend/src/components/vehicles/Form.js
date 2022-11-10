import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addVehicle } from '../../actions/vehicles'


export class Form extends Component {
  state = {
    make: '',
    model: '',
    year: ''
  }

static propTypes = {
  addVehicle:  PropTypes.func.isRequired
}

onChange = e => this.setState({ [e.target.name]:e.target.value })

onSubmit = e => {
  e.preventDefault()
  const { make, model, year } = this.state
  const vehicle = { make, model, year }
  this.props.addVehicle(vehicle)
  this.setState({
    make: "",
    model: "",
    year: ""
  })
}

  render() {
    const { make, model, year } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Vehicle</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Make</label>
            <input 
              type="text" 
              className="form-control" 
              name='make' 
              onChange={this.onChange} 
              value={make}/>
          </div>
          <div className='form-group'>
            <label>Model</label>
            <input 
              type="text" 
              className="form-control" 
              name='model' 
              onChange={this.onChange} 
              value={model}/>
          </div>
          <div className='form-group'>
            <label>Year</label>
            <input 
              type="text" 
              className="form-control" 
              name='year' 
              onChange={this.onChange} 
              value={year}/>
          </div>
          <div className='form-group'>
            <button type='submit' className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addVehicle })(Form)