import { useQuery } from '@tanstack/react-query'
import { getFilters } from '../api/getFilters'
import { IFilters } from '../model/types'

export const useAnimeFilters = () => {
	const { data, isLoading, isError, error } = useQuery<IFilters>({
		queryKey: ['anime-filters'],
		queryFn: async () => {
			const { data } = await getFilters()
			return data
		},
		staleTime: 1000 * 60 * 60,
		refetchOnWindowFocus: false,
		select: data => ({
			genres: data.genres,
			themes: data.themes,
			demographics: data.demographics,
			ratings: data.ratings,
			seasons: data.seasons,
			sortings: data.sortings,
			types: data.types,
			years: data.years,
		}),
	})

	return {
		filterReferences: data ?? null,
		isLoading,
		isError,
		error,
	}
}
