import { create } from 'zustand'
import { ISearchInterface } from './types'

interface IAdvancedSearchFiltersStore {
	filters: ISearchInterface
	query: () => string
	setQuery: (query: string) => void
	setFilter: <K extends keyof ISearchInterface>(
		key: K,
		value: ISearchInterface[K]
	) => void
	setFilters: (filters: ISearchInterface) => void
	clearFilters: () => void
	clearQuery: () => void
}

export const useAdvancedAnimeSearchFilters =
	create<IAdvancedSearchFiltersStore>((set, get) => ({
		filters: {},
		query: () => get().filters.russian || '',
		setQuery: query =>
			set(state => ({ filters: { ...state.filters, russian: query } })),
		setFilter: (key, value) =>
			set(state => ({ filters: { ...state.filters, [key]: value } })),
		setFilters: filters => set({ filters }),
		clearFilters: () => set({ filters: {} }),
		clearQuery: () =>
			set(state => ({ filters: { ...state.filters, russian: '' } })),
	}))
