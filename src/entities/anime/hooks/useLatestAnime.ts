import { useQuery } from '@tanstack/react-query'
import { getLatestReleases } from '../api'

export function useLatestAnime() {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['latestAnime'],
		queryFn: async () => getLatestReleases(),
	})
	if (data) return { latestAnime: data.data, isLoading, isError, error }

	return { latestAnime: null, isLoading, isError, error }
}
