import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVehicles, deleteVehicle } from '../../actions/vehicles'

export class Vehicles extends Component {
  static propTypes = {
    vehicles: PropTypes.array.isRequired,
    getVehicles: PropTypes.func.isRequired,
    deleteVehicle: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getVehicles()
  }
  
  render() {
    return (
      <Fragment>
        <h2>Vehicles</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.vehicles.map(vehicle => (
              <tr key={vehicle.id}>
                 <td>{vehicle.id}</td>
                 <td>{vehicle.make}</td>
                 <td>{vehicle.model}</td>
                 <td>{vehicle.year}</td>
                 <td>
                  <button onClick={this.props.deleteVehicle.bind(this, vehicle.id)} className='btn btn-danger btn-sm'>Delete</button>
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles.vehicles
})

export default connect(mapStateToProps, { getVehicles, deleteVehicle })(Vehicles)