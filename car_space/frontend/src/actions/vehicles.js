import axios from 'axios'

import { GET_VEHICLES, DELETE_VEHICLE, ADD_VEHICLE } from './types'

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
            dispatch({
                type: ADD_VEHICLE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// DELETE VEHICLE
export const deleteVehicle = (id) => dispatch => {
    axios
        .delete(`/api/vehicles/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_VEHICLE,
                payload: id
            })
        })
        .catch(err => console.log(err))
}