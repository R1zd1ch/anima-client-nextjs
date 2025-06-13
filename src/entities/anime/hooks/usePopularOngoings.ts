import { useQuery } from '@tanstack/react-query'
import { getPopularOngoings } from '../api'

export function usePopularOngoings() {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['popularOngoings'],
		queryFn: async () => getPopularOngoings(),
	})

	if (data) return { popularOngoings: data.data, isLoading, isError, error }

	return { popularOngoings: null, isLoading, isError, error }
}
