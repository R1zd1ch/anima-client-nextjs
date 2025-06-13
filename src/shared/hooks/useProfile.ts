import { getProfile } from '@/src/entities/user/api'
import { useQuery } from '@tanstack/react-query'

export function useProfile() {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => getProfile(),
	})

	return {
		user,
		isLoading,
	}
}
