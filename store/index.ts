import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {poiReducer, poiInitialState, POIState} from './poi'

export interface ApplicationState {
	poi: POIState;
}

export const initialState: ApplicationState = {
	poi: poiInitialState,
};

const combinedReducer = combineReducers<ApplicationState, any>({
	poi: poiReducer
});

export const rootReducer = (state: ApplicationState = initialState, action: RootAction) => {
	return combinedReducer(state, action);
};

let composeEnhancers = applyMiddleware(thunk);

export const store = createStore(rootReducer, initialState, composeEnhancers)