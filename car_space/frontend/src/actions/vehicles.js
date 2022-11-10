import axios from 'axios'
import { createMessage } from './messages'

import { GET_VEHICLES, DELETE_VEHICLE, ADD_VEHICLE, GET_ERRORS } from './types'

// GET VEHICLES
export const getVehicles = () => dispatch => {
    axios
        .get('/api/vehicles/')
        .then(res => {
            dispatch({
                type: GET_VEHICLES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// ADD VEHICLE
export const addVehicle = (vehicle) => dispatch => {
    axios
        .post(`/api/vehicles/`, vehicle)
        .then(res => {
            dispatch(createMessage({addVehicle: "Vehicle Added"}))
            dispatch({
                type: ADD_VEHICLE,
                payload: res.data
            })
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}

// DELETE VEHICLE
export const deleteVehicle = (id) => dispatch => {
    axios
        .delete(`/api/vehicles/${id}/`)
        .then(res => {
            dispatch(createMessage({deleteVehicle: "Vehicle Deleted"}))
            dispatch({
                type: DELETE_VEHICLE,
                payload: id
            })
        })
        .catch(err => console.log(err))
}