import { Site } from "../../models";

export enum POIActionTypes {
    POI_REQUEST = 'POI_REQUEST',
    POI_SUCCESS = 'POI_SUCCESS',
}

export interface POIState {
    sites: Site[]
    fetching: boolean
}