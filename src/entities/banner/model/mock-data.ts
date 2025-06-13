import { BannerType, IBanner } from './types'

export const mockBanners: IBanner[] = [
	{
		id: 1,
		type: BannerType.NEWS,
		title: 'New Anime Release',
		description: 'Check out the latest anime releases this week!',
		image: 'https://placehold.co/1400x380?text=Banner&font=Inter',
	},
	{
		id: 2,
		type: BannerType.NEWS,
		title: 'Top Anime of the Season',
		description: 'Discover the most popular anime of the current season.',
		image: 'https://placehold.co/1400x380?text=Banner&font=Inter',
	},
]

export const mockAdBanners: IBanner[] = [
	{
		id: 1,
		type: BannerType.ADVERTISEMENT,
		company: 'Anime Merch Co.',
		adText: 'Get 20% off on all anime merchandise!',
		adImage: 'https://placehold.co/1400x380?text=AD_Banner&font=Inter',
		callToAction: 'Shop Now',
		link: 'https://anime-merch-co.com',
	},
	{
		id: 2,
		type: BannerType.ADVERTISEMENT,
		company: 'Streaming Service X',
		adText: 'Watch thousands of anime episodes on our platform.',
		adImage: 'https://placehold.co/1400x380?text=AD_Banner&font=Inter',
		callToAction: 'Start Free Trial',
		link: 'https://streaming-service-x.com',
	},
]
