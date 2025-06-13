export enum BannerType {
	NEWS,
	ADVERTISEMENT,
}

export interface IBanner {
	id: number
	type: BannerType
	title?: string
	description?: string
	image?: string
	link?: string

	company?: string
	adText?: string
	adImage?: string
	callToAction?: string
}

export interface IUseCarouselInterface {
	items: IBanner[]
	autoSlideInterval?: number
}

export interface IBannerNavigationButtonsProps {
	onNext: () => void
	onPrev: () => void
	disableNext?: boolean
	disablePrev?: boolean
}
