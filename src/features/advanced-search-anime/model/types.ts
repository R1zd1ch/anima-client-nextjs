import {
	IDemographic,
	IGenre,
	IRating,
	ISorting,
	ITheme,
	IType,
	IYear,
} from '@/src/entities/filter'

export type Status = 'anons' | 'ongoing' | 'released'

export interface ISearchInterface {
	page?: number
	limit?: number
	russian?: string
	genres?: number[]
	demographics?: number[]
	themes?: number[]
	types?: string[]
	seasons?: string[]
	min_year?: number
	max_year?: number
	sort?: string
	age_ratings?: string[]
	status?: Status
}

export interface MultiselectButtonAnimeFilterProps {
	className?: string
	title?: string
	description?: string
	data: IType[] | IRating[]
	selectedItems: string[]
	selectItem: (item: string[]) => void
}

export interface SliderAnimeFilterProps {
	className?: string
	title?: string
	description?: string
	data: IYear[]
	selectedItems: [number, number]
	selectItem: (min: number, max: number) => void
}

export interface SelectAnimeFilterProps {
	className?: string
	title?: string
	description?: string
	data: IGenre[] | IDemographic[] | ITheme[]
	selectedItems: number[]
	selectItem: (item: number[]) => void
}

export interface SimpleSelectAnimeFilterProps {
	className?: string
	title?: string
	description?: string
	data: ISorting[]
	selectedItem: string
	selectItem: (item: string) => void
}
