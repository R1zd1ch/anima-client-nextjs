import { useQuery } from '@tanstack/react-query'
import { getBanners } from '../api'

export function useBannerData() {
	const { data: banners, isLoading } = useQuery({
		queryKey: ['banners'],
		queryFn: async () => getBanners(),
	})

	return { banners, isLoading }
}
