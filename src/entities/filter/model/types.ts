export interface IGenre {
	id: string
	requestId: number
	name: string
	russian: string
}

export interface IDemographic {
	id: string
	requestId: number
	name: string
	russian: string
}

export interface ITheme {
	id: string
	requestId: number
	name: string
	russian: string
}

export interface ISorting {
	value: string
	label: string
	description: string
}

export interface ISeason {
	value: string
	description: string
}

export interface IType {
	value: string
	description: string
}

export interface IRating {
	value: string
	label: string
	description: string
}

export type IYear = number

export interface IFilters {
	genres: IGenre[]
	demographics: IDemographic[]
	themes: ITheme[]
	ratings: IRating[]
	seasons: ISeason[]
	sortings: ISorting[]
	types: IType[]
	years: IYear[]
}

export interface IFiltersResponse {
	success: boolean
	data: IFilters
	error: null | string
	meta: null | unknown
}

export type IYearFilter = number

export interface ITypeFilter {
	value: string
	label: string
}

export interface ISortingFilter {
	value: string
	label: string
	description: string
}

export interface ISeasonFilter {
	value: string
	label: string
}

export interface IRatingFilter {
	value: string
	label: string
	description: string
}
