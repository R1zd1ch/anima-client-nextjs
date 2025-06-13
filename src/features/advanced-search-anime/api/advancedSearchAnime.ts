import { api } from '@/src/shared/api'
import { ISearchInterface } from '../model/types'
import { IAnime } from '@/src/entities/anime/model/types'

export async function advancedSearchAnime(params: ISearchInterface) {
	const response = await api.get<IAnime[]>(`anime/catalog/releases`, {
		params: { ...params },
	})
	return response
}
