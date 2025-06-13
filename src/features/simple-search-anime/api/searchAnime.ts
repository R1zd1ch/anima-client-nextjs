import { IAnime } from '@/src/entities/anime/model/types'
import { api } from '@/src/shared/api'

export async function searchAnime(query: string) {
	const limit = 50
	const page = 1

	const response = await api.get<IAnime[]>(`anime/catalog/releases`, {
		params: {
			russian: query,
			page,
			limit,
		},
	})
	return response
}
