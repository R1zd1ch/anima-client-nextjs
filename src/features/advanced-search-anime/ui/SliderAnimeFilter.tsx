import { cn } from '@/src/shared/utils'
import { SliderAnimeFilterProps } from '../model'
import { useState, useEffect } from 'react'
import { Slider } from '@/src/shared/components/ui/slider'

export function SliderAnimeFilter({
	className,
	title,
	description,
	data,
	selectedItems,
	selectItem,
}: SliderAnimeFilterProps) {
	const [range, setRange] = useState<[number, number]>(selectedItems)

	useEffect(() => {
		setRange(selectedItems)
	}, [selectedItems])

	const min = Math.min(...data)
	const max = Math.max(...data)

	return (
		<div className={cn('flex flex-col gap-4 px-4', className)}>
			<div>
				<h1 className='font-bold text-base'>{title}</h1>
				<p className='text-xs text-muted-foreground max-w-11/12'>
					{description}
				</p>
			</div>
			<div className='flex items-center gap-4 text-sm'>
				<p className='w-10 text-right'>{range[0]}</p>
				<Slider
					min={min}
					max={max}
					step={1}
					value={range}
					onValueChange={(val: [number, number]) => {
						setRange(val)
						selectItem(val[0], val[1])
					}}
					minStepsBetweenThumbs={1}
					className='w-full'
				/>
				<p className='w-10 text-left'>{range[1]}</p>
			</div>
		</div>
	)
}
