import * as React from 'react';
import { DestinationDetails } from '../../models/components/map-box/map-box.model';
import { FoodProduct } from '../../models/food.model';
import { CategoryBadgeComponent } from '../reusable/categories/category.controlled';
import * as moment from 'moment';
import { Hoverable } from '../reusable/hoverable/hoverable.component';
import { CategoryProps } from '../../models/components/category.model';

interface InfoPanelControlledProps {
	collapsed: boolean;
	sideList: string[];
	imgURL: string;
	targetDetails: DestinationDetails;
	product: FoodProduct;
	navigationMode: string;
	eta: number;
}

export const InfoPanelComponent = (props: InfoPanelControlledProps) => {
	return (
		<div
			className="info-panel-component"
		>
			<div
				className="info_header"
			>
				<Hoverable
					icon="food"
					label="Food Item"
				>
					<ul>
						<span
							className="food-details_title"
						>
							{props.product.name}
						</span>
						<li>
							{props.product.categories.map(
								(category: CategoryProps) => {
									return (
										<CategoryBadgeComponent
											key={category.id.toString()}
											{...category}
										/>
									);
								}
							)}
						</li>
						<li>
							Reviews: {props.product.reviews}
						</li>
					</ul>
				</Hoverable>
				<div>
					<Hoverable
						label={props.targetDetails.businessName}
						icon={'building'}
					>
						<ul>
							<li>
								{props.targetDetails.street}
							</li>
							<li>
								{props.targetDetails.city}
								{props.targetDetails.zipCode}
							</li>
							<li>
								{props.targetDetails.county}
							</li>
						</ul>
					</Hoverable>
				</div>
				<div>
					{props.navigationMode}
				</div>
				<div>
					<Hoverable
						label={`Arive in: ${moment(props.eta).format('LT')}`}
						icon="map-marker"
					/>
				</div>
			</div>
		</div>
	);
};
