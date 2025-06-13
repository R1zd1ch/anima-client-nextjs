import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../api'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: async () => getProfile(),
	})

	if (data) return { user: data.data, isLoading }

	return { user: null, isLoading }
}
