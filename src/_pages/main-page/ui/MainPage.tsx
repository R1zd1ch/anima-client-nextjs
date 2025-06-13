import { BannerCarousel } from '@/src/entities/banner/ui'
import { AnimeSectionsContainer } from '@/src/widgets/main-page-anime-sections'

export async function MainPage() {
	return (
		<div className='space-y-10 text-center'>
			<BannerCarousel></BannerCarousel>
			<AnimeSectionsContainer></AnimeSectionsContainer>
		</div>
	)
}
