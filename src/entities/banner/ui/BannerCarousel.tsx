'use client'
import { useBannerData } from '../hooks'
import { BannerItem } from './BannerItem'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { BannerNavigationButtons } from './BannerNavigationButtons'
import { Skeleton } from '@/src/shared/components/ui'

export function BannerCarousel() {
	const { banners, isLoading } = useBannerData()
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		slides: {
			perView: 1,
		},
	})

	if (isLoading) {
		return (
			<Skeleton className='w-full h-64 md:h-[400px] lg:h-[450px] rounded-xl' />
		)
	}

	if (!banners || banners.length === 0) {
		return null
	}

	return (
		<div className='relative w-full h-64 md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl'>
			<div ref={sliderRef} className='keen-slider w-full h-full'>
				{banners.map((banner, index) => (
					<div className='keen-slider__slide' key={index}>
						<BannerItem item={banner} />
					</div>
				))}
			</div>
			<div className='absolute bottom-4 right-2'>
				{banners.length > 1 && (
					<BannerNavigationButtons
						onPrev={() => instanceRef.current?.prev()}
						onNext={() => instanceRef.current?.next()}
						className='px-4'
					/>
				)}
			</div>
		</div>
	)
}
