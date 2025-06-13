import Image from 'next/image'
import { Button } from '@/src/shared/components/ui'
import { BannerType, type IBanner } from '../model'

export function BannerItem({ item }: { item: IBanner }) {
	const renderContent = () => {
		switch (item.type) {
			case BannerType.NEWS:
				return (
					<div className='space-y-2 text-left text-white'>
						<h2 className='text-3xl md:text-4xl font-bold'>{item.title}</h2>
						<p className='text-base md:text-lg leading-relaxed opacity-90'>
							{item.description}
						</p>
					</div>
				)
			case BannerType.ADVERTISEMENT:
				return (
					<div className='space-y-4 text-left text-white'>
						<h2 className='text-3xl md:text-4xl font-bold'>{item.company}</h2>
						<p className='text-base md:text-lg opacity-90'>{item.adText}</p>
						{item.callToAction && item.link && (
							<Button
								asChild
								variant='secondary'
								className='w-fit hover:bg-secondary/80 transition-colors text-foreground'
							>
								<a href={item.link} className='text-white'>
									{item.callToAction}
								</a>
							</Button>
						)}
					</div>
				)
			default:
				return null
		}
	}

	const imageUrl = item.type === BannerType.NEWS ? item.image : item.adImage

	return (
		<div className='relative w-full h-full rounded-xl overflow-hidden group'>
			<div className='absolute inset-0 bg-muted'>
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={item.title || item.company || 'Banner'}
						fill
						className='object-cover transition-transform duration-700 group-hover:scale-105'
						priority
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
					/>
				)}
			</div>

			<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10 text-white'>
				<div className='max-w-4xl space-y-4'>{renderContent()}</div>
			</div>

			{item.link && (
				<a
					href={item.link}
					className='absolute inset-0 z-20'
					aria-label={`Перейти: ${item.title || item.company}`}
					tabIndex={-1}
				/>
			)}
		</div>
	)
}
