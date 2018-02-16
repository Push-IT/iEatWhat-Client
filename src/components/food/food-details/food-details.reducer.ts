import { Reducer } from '../../../models/reducer.model';
import { Action } from '../../../models/action.model';
import { FoodDetailsComponentState } from '../../../models/food.model';

export const foodDetailsReducer: Reducer = (
	action: Action,
	currentState: FoodDetailsComponentState
): FoodDetailsComponentState => {
	const {type, payload} = action;

	switch (type) {
		case'DATA_READY':
			return {...currentState, ...payload};
		case'FOOD_DETAILS_UPDATED':
			return {...currentState, foodDetails: payload};
		default:
			return currentState;
	}
};
