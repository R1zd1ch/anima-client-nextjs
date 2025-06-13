import Image from 'next/image'
import { cn } from '@/src/shared/utils'

interface LogoProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	showText?: boolean
	orientation?: 'horizontal' | 'vertical'
}

export function Logo({
	className,
	size = 'md',
	showText = true,
	orientation = 'horizontal',
}: LogoProps) {
	const sizeMap = {
		sm: { width: 80, height: 80 },
		md: { width: 120, height: 120 },
		lg: { width: 160, height: 160 },
	}

	const textSizeMap = {
		sm: 'text-lg',
		md: 'text-2xl',
		lg: 'text-3xl',
	}

	const { width, height } = sizeMap[size]
	const textSize = textSizeMap[size]

	return (
		<div
			className={cn(
				'flex items-center gap-4',
				orientation === 'vertical' && 'flex-col text-center',
				orientation === 'horizontal' && 'flex-row',
				className
			)}
		>
			<div className='flex-shrink-0'>
				<Image
					src='https://placehold.co/160x160?text=Logo&font=Inter'
					alt='AnimaHub Logo'
					priority
					width={width}
					height={height}
					className='rounded object-cover'
				/>
			</div>

			{showText && (
				<div
					className={cn(
						'flex flex-col justify-start',
						orientation === 'vertical' && 'items-center'
					)}
				>
					<h2 className={cn(textSize, 'font-extrabold')}>AnimaHub</h2>
				</div>
			)}
		</div>
	)
}
