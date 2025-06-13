import { useAdvancedAnimeSearchFilters } from './useAdvancedAnimeSearchFilters'
import { advancedSearchAnime } from '../api/advancedSearchAnime'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@/src/shared/hooks'

export function useAdvancedAnimeSearch(delay: number = 300) {
	const {
		filters,
		query: queryFn,
		setFilter,
		setQuery,
		setFilters,
		clearFilters,
		clearQuery,
	} = useAdvancedAnimeSearchFilters()
	const debouncedFilters = useDebounce(filters, delay)
	const query = queryFn()

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['advancedSearchAnime', debouncedFilters, query],
		queryFn: () => advancedSearchAnime(debouncedFilters),
		staleTime: 1000 * 60 * 5,
	})

	return {
		animes: data?.data ?? null,
		isLoading,
		isError,
		error,
		filters,
		query,
		setFilter,
		setFilters,
		setQuery,
		clearFilters,
		clearQuery,
	}
}
