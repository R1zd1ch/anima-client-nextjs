import { Button } from '@/src/shared/components/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/src/shared/utils'

interface IBannerNavigationButtonsProps {
	onPrev: () => void
	onNext: () => void
	className?: string
}

export function BannerNavigationButtons({
	onPrev,
	onNext,
	className,
}: IBannerNavigationButtonsProps) {
	return (
		<div className={cn('flex gap-2', className)}>
			<Button
				size='icon'
				onClick={onPrev}
				className='h-10 w-10 md:w-14 bg-background/30 hover:bg-background/50 text-foreground transition-colors'
				aria-label='Предыдущий слайд'
			>
				<ChevronLeft className='h-5 w-5 md:h-6 md:w-6' />
			</Button>
			<Button
				size='icon'
				onClick={onNext}
				className='h-10 w-10 md:w-14 bg-background/30 hover:bg-background/50 text-foreground transition-colors'
				aria-label='Следующий слайд'
			>
				<ChevronRight className='h-5 w-5 md:h-6 md:w-6' />
			</Button>
		</div>
	)
}
