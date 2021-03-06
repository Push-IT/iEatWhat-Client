import { StoreService } from '../services/store.service';
import { USDAItem } from './usda/usda-food.model';
import { RouteComponentProps } from 'react-router';
import { Action } from './store/action.model';
import { Subject } from '@reactivex/rxjs';

export type SearchBarProps = {
	handleInputChange: Subject<string>;
	handleEnterPress: Subject<string>;
};

export type SearchComponentState = {
	searchItemsPerPage: number;
	resultsPage: number;
	resultsVisible: boolean;
};

export type SearchComponentProps = {
	store: StoreService;
	routes: RouteComponentProps<HTMLDivElement>;
};

export type SearchResultProps = {
	item: USDAItem;
	clickHandler: (slug: string) => void;
};

export type SearchResultsProps = {
	items: USDAItem[];
	dispatch: (action: Action) => void;
	selectHandler: (slug: string) => {};
	visible: boolean;
	pageNumber: number;
};

export const SEARCH_STATE_INIT: SearchComponentState = {
	searchItemsPerPage: 0,
	resultsPage: 20,
	resultsVisible: false
};
