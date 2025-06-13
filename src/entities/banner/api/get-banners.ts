import { getMockBanners } from '../mock'
import { IBanner } from '../model'

export async function getBanners(): Promise<IBanner[]> {
	const response = await getMockBanners()
	return response
}
