// export interface USDASearchRequestParams {
// 	search_terms?: string;
// 	data_source?: string;
// 	food_group_ID?: string;
// 	sort?: string;
// 	maximum_rows?: string;
// 	beginning_row?: string;
// 	results_format?: string;
// }
//
// export interface USDAReportParams {
// 	fg: string;
// 	format: string;
// 	max: number;
// 	offset: number;
// 	nbno: string;
// 	nutrients: string;
// 	sort: string;
// 	subset: number;
// 	n_db: string;
// 	report_type?: string;
// 	response_format?: string;
// }
//
// export interface USDAListParams {
// 	pagination?: {
// 		offset?: number;
// 		max?: number;
// 		total?: number;
// 	};
// 	groupFilter: string;
// 	version: string;
// }
//
// export interface USDASearchParams {
// 	queries?: string[];
// 	foodGroupId?: string;
// 	dataSource?: 'Branded Food Products' | 'Standard Reference';
// 	pagination?: {
// 		offset?: number;
// 		max?: number;
// 		total?: number;
// 	};
// }
//
// export interface USDARequestOptions {
// 	search?: USDASearchParams;
// 	list?: USDAListParams;
// 	report?: USDAReportParams;
// }
//
// export const REPORT_PARAMS_KEYS = {
// 	foodGroup: 'fg',
// 	format: 'format',
// 	maxRequests: 'max',
// 	beginningRow: 'offset',
// 	nutrientById: 'nbno',
// 	nutrientList: 'nutrients',
// 	sort: 'sort',
// 	subset: 'sub`set',
// };
//
//
// // export interface USDARequestParams extends
// // 	USDAReportParams,
// // 	USDASearchRequestParams,
// // 	USDAListParams {
// // 	api_key: string;
// // 	nDBNo?: string;
// // 	name?: string;
// // 	group?: string;
// // }
//
// export interface USDAReportResponse {
// 	request_params?: USDAReportParams;
// 	food?: USDAFood;
// 	foods?: USDAFoods;
// 	desc?: USDADescMeta;
// 	ingredients?: USDAIngredients;
// 	nutrient?: USDANutrient;
// 	measures?: USDAMeasures;
// 	source?: USDASource;
// 	footnote?: USDAFootnote;
// 	langual?: USDALangual;
// }