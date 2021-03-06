import { FoodProduct } from '../food.model';
import { StoreService } from '../../services/store.service';
import { AuthServices } from '../../services/auth.service';
import { LocationService } from '../../services/location.service';

export interface MainComponentProps {
	store: StoreService;
	auth: AuthServices;
	location: LocationService;
}

export interface MainComponentState {
	appReady: boolean;
	navbarIsExtended: boolean;
	isWideScreen: boolean;
	isLoggedIn: boolean;
	selectedFoodItem: FoodProduct;
}

export const MAIN_COMPONENT_STATE_INIT: MainComponentState = {
	appReady: false,
	navbarIsExtended: false,
	isWideScreen: false,
	isLoggedIn: false,
	selectedFoodItem: <FoodProduct> {}
};
