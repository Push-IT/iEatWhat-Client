import * as React from 'react';
import { ReactElement } from 'react';
import { SearchResultsProps } from '../../../models/components/search.model';
import { SearchResultProps } from '../../../models/components/search.model';
import { CategoryComponent } from '../categories/category.controlled';
import { Link } from 'react-router-dom';
import { USDAItem } from '../../../models/usda/usda-report.model';
import * as moment from 'moment';

export const SearchResult = (props: SearchResultProps): ReactElement<HTMLElement> => {
	const FIXTURE_IMG = 'https://static.pexels.com/photos/8758/food-dinner-lemon-rice.jpg';
	console.log('ndbno', props);
	return (
		<Link
			className="search-result row"
			to={`/food-details/${props.item.ndbno}`}
		>
			<div
				className="result_image-box col-sm-4"
			>
				<div
					className="result_image"
				>
					<img src={FIXTURE_IMG} alt={`A picture of ${props.item.name}`}/>
				</div>
			</div>
			<div
				className="result_info col-sm-8"
			>
				<div
					className="result_highlights"
				>
					{/*// prod name*/}
					<div>
						{props.item.ndbno || 'No Name Found'}
					</div>
					{/*updated last*/}
					<div>
						{moment(Date.now ()).fromNow ()}
					</div>
					{/*reviewed*/}
					<div>
						{`No Reviews`}
					</div>
				</div>
				<div
					className="result_categories"
				>
					{['demo'].map((tag: string) => {
						return (
							<CategoryComponent
								key={tag}
								tag={tag}
							/>
						);
					})}
				</div>
			</div>
		</Link>
	);
};

export const SearchResultsComponent = (props: SearchResultsProps) => {
	const display = props.visible ? 'flex' : 'none';
	console.log('props', props);
	return (
		<div
			style={{
				display: display
			}}
			className="search-results-component"
		>
			{props.items.map((item: USDAItem) => {
				console.log('props item', item);
				return (
					<SearchResult
						key={item.ndbno.toString()}
						item={item}
						clickHandler={() => {
							props.selectHandler (item.ndbno);
						}}
					/>
				);
			})}
		</div>
	);
};
