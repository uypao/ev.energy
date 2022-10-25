import { Dispatch } from "redux"
import { POIFilter } from "../../models"
import { POIActionTypes } from "./types"

const host = 'https://api.openchargemap.io/v3'
const key = '6b95d8ae-5e80-4c92-aec1-8a2a01457f4b'

const parseQueryString = (obj) => {     
    return `&latitude=${obj.latitude}&longitude=${obj.longitude}&distance=50`
}

export const getPOIList = (filters?: POIFilter) => {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            let _filters = filters && parseQueryString(filters)
            let url = `${host}/poi?&key=${key}${_filters}`      
            fetch(url)
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