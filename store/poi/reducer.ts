import { Reducer } from "redux";
import { POIActionTypes, POIState } from "./types";

export const poiInitialState: POIState = {
	sites: [],
    fetching: false
};

export const poiReducer: Reducer<POIState, any> = (state = poiInitialState, action: any) => {	
	switch (action.type) {
		case POIActionTypes.POI_REQUEST:
			return {...state, fetching: true};
		case POIActionTypes.POI_SUCCESS:
			return {...state, fetching: false, sites: action.payload};
		default: {
			return state;
		}
	}
};