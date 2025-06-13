import { cn } from '@/src/shared/utils'
import { SimpleSelectAnimeFilterProps } from '../model'
import {
	Button,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	Separator,
} from '@/src/shared/components/ui'
import { CircleX } from 'lucide-react'
import React, { useState } from 'react'

export function SimpleSelectAnimeFilter({
	className,
	title,
	description,
	data,
	selectedItem,
	selectItem,
}: SimpleSelectAnimeFilterProps) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={cn('flex flex-col gap-4 px-4', className)}>
			<div>
				<h1 className='font-bold text-base'>{title}</h1>
				<p className='text-xs text-muted-foreground max-w-11/12'>
					{description}
				</p>
			</div>
			<Select
				onValueChange={selectItem}
				value={selectedItem.length > 0 ? selectedItem : ''}
				open={isOpen}
				onOpenChange={setIsOpen}
			>
				<SelectTrigger className='w-full relative z-10 text-accent-foreground p-6'>
					<SelectValue placeholder='Укажите способ сортировки' />
					<div
						className={`
							absolute top-2 text-accent-foreground right-10 z-50
							transition-all duration-300 ease-in-out
							${selectedItem ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'}
						`}
					>
						<Button
							variant='ghost'
							className='size-9'
							size={'icon'}
							onClick={e => {
								setIsOpen(false)
								e.stopPropagation()
								selectItem('')
							}}
						>
							<CircleX className='size-6 text-accent-foreground' />
						</Button>
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup className='w-full flex flex-col gap-1'>
						<SelectLabel>Сортировка</SelectLabel>
						{data.map((item, index) => (
							<React.Fragment key={item.value}>
								<SelectItem value={item.value}>{item.label}</SelectItem>
								{index !== data.length - 1 && <Separator></Separator>}
							</React.Fragment>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
