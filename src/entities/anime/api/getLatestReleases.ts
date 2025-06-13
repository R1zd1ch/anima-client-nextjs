import { api } from '@/src/shared/api'
import { IAnime } from '../model/types'

export async function getLatestReleases() {
	const count = 20
	const response = await api.get<IAnime[]>(`anime/releases/latest`, {
		params: {
			count,
		},
	})
	return response
}
