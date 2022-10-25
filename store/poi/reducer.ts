import { Reducer } from "redux";
import { POIActionTypes, POIState } from "./types";
import _ from 'lodash'

export const poiInitialState: POIState = {
	sites: [],
    fetching: false
};

export const poiReducer: Reducer<POIState, any> = (state = poiInitialState, action: any) => {	
	switch (action.type) {
		case POIActionTypes.POI_REQUEST:
			return {...state, fetching: true};
		case POIActionTypes.POI_SUCCESS:
			let results = _.uniqBy(action.payload, (d) => d.ID)
			return {...state, fetching: false, sites: results};
		default: {
			return state;
		}
	}
};