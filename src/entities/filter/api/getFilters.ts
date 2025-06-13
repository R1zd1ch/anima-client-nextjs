import { api } from '@/src/shared/api'
import { IFilters } from '../model/types'

export async function getFilters() {
	const response = await api.get<IFilters>('anime/catalog/references')
	return response
}
