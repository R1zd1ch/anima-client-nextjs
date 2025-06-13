import { api } from '@/src/shared/api'
import { IAnime } from '../model/types'

export async function getPopularOngoings() {
	const page = 1
	const count = 20
	const response = await api.get<IAnime[]>('/anime/catalog/releases', {
		params: { page, count, sort: 'shikimoriScore_desc', status: 'ongoing' },
	})

	return response
}
