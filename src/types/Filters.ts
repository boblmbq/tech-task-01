export interface Filters {
	brand?: string;
	price?: string;
	carMileageFrom?: string;
	carMileageTo?: string;
}

export type FlexibleFilters = {
	[x: string]: any;
} & Filters;
