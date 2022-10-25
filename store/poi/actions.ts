import { Dispatch } from "redux"
import { POIActionTypes } from "./types"

const host = 'https://api.openchargemap.io/v3'
const key = '6b95d8ae-5e80-4c92-aec1-8a2a01457f4b'

export const getPOIList = () => {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            fetch(`${host}/poi?key=${key}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: POIActionTypes.POI_SUCCESS,
                    payload: res
                })
                resolve(res)
            })
        })
    }
}

export const chargeRequest = (params: any) => {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {            
            // fetch(`https://example.ev.energy/chargingsession`, {
            //     method: 'POST',
            //     body: JSON.stringify(params)
            // })
            // .then(res => {
            //     //do something 
            // })            
        })
    }
}