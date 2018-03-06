import * as React from 'react';
import {
	FOOD_DETAILS_STATE_INIT, FoodDetailsComponentProps,
	FoodDetailsComponentState
} from '../../../models/food.model';
import { ReactElement } from 'react';
import { Subscription } from '@reactivex/rxjs';
import { LoadingComponent } from '../../reusable/loading/loading.component';
import { VotingComponent } from '../../reusable/voting/voting.component';
import { CategoryComponent } from '../../reusable/categories/category.controlled';
import { IngredientsComponent } from './igredients.controlled';
import { DescriptionComponent } from './description.controlled';
import { foodDetailsReducer } from './food-details.reducer';
import { actionDataReady } from '../../main/main.actions';
import { ReportFetchResponse } from '../../../models/usda/usda.model';
import * as moment from 'moment';
import { eventRequest } from '../../../services/rest-service';

export class FoodDetailsComponent extends React.Component<FoodDetailsComponentProps, FoodDetailsComponentState> {
	public state = FOOD_DETAILS_STATE_INIT;
	private subscriptions: Subscription;
	private content: any = {} as any;

	public async componentDidMount(): Promise<void> {
		this.subscriptions = this.props.store
			.registerStore$(foodDetailsReducer, this.state)
			.subscribe((state: FoodDetailsComponentState) => {
				this.setState(state);
			});

		const content: ReportFetchResponse = await eventRequest({
			type: 'SEARCH:REPORT',
			payload: this.props.routeComponentProps.match.url
				.split('?')[1]
				.split('=')[1]
		});

		this.content = content.foods[0];
		console.log('report', this.content);
		this.props.store.dispatch(actionDataReady());
	}

	public componentWillUnmount(): void {
		this.subscriptions.unsubscribe();
	}

	public render(): ReactElement<HTMLDivElement> {
		if (this.state.dataReady) {
			return (
				<div
					className="food-details-component"
				>
					<div
						className="content_wrapper"
					>
						<div
							className="food-details_header"
						>
							<div
								className="header_image-box"
							>
								<img
									src={'#'}
									alt={`${this.content.name} picture`}
								/>

							</div>
							<h1>{this.content.name}</h1>
							<div
								className="header--updated-last"
							>
								{moment(Date.now()).format('LL')}
							</div>
							<div
								className="header--reviewed"
							>
								{this.content.reviews || 'No Reviews'}
							</div>
						</div>

						<div
							className="categories_box"
						>
							{this.content.categories((tag: string) => {
										return (
											<CategoryComponent
												key={tag}
												tag={tag}
											/>
										);
								})}
						</div>
						<hr />
						<DescriptionComponent
							name={this.content.desc.ndb_food_number}
							upc={this.content.req}
							type={this.content.group}
							updatedOn={this.content.lastUpdated}
						/>
						<hr />
						<IngredientsComponent
							// TODO
							ingredients={[]}
						/>
						<hr />
						{/*<CommentsComponent viewId={this.content.desc.food_name}/>*/}
						<hr />
						<VotingComponent/>
					</div>
				</div>
			);
		} else {
			return (
				<LoadingComponent visible={this.state.dataReady}/>
			);
		}
	}
}
