import { mockBanners, mockAdBanners, IBanner } from '../model'

export async function getMockBanners(): Promise<IBanner[]> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([...mockBanners, ...mockAdBanners])
		}, 1000)
	})
}
