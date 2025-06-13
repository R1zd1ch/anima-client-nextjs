import { useState } from 'react'
import {
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/src/shared/components/ui'
import { Check, ChevronsUpDown, CircleX } from 'lucide-react'
import { cn } from '@/src/shared/utils'
import { SelectAnimeFilterProps } from '../model'

export function SelectAnimeFilter({
	className,
	title,
	description,
	data,
	selectItem,
	selectedItems,
}: SelectAnimeFilterProps) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleItem = (id: number) => {
		if (selectedItems.includes(id)) {
			selectItem(selectedItems.filter(item => item !== id))
		} else {
			selectItem([...selectedItems, id])
		}
	}

	return (
		<div
			className={cn('flex flex-col gap-2 px-4', className)}
			suppressHydrationWarning
		>
			<div>
				<h1 className='font-bold text-base'>{title}</h1>
				<p className='text-xs text-muted-foreground max-w-11/12'>
					{description}
				</p>
			</div>

			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						className='w-full justify-between h-fit relative z-10 p-4'
					>
						<p className='break-words text-left flex gap-1 whitespace-normal'>
							{selectedItems.length > 0
								? data
										.filter(item => selectedItems.includes(item.requestId))
										.map(item => item.russian)
										.join(', ')
								: `Выберите ${title?.toLowerCase()}`}
						</p>
						<div
							className={`
							absolute top-2 right-10 z-50
							transition-all duration-300 ease-in-out
							${selectedItems.length > 0 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'}
						`}
						>
							<div
								className='size-9 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer'
								onClick={e => {
									setIsOpen(false)
									selectItem([])
									e.stopPropagation()
								}}
							>
								<CircleX className='size-6' />
							</div>
						</div>

						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>

				<PopoverContent className='min-w-[24vw] p-0'>
					<Command>
						<CommandList>
							<CommandGroup>
								{data.map(item => {
									const isSelected = selectedItems.includes(item.requestId)
									return (
										<CommandItem
											key={item.id}
											onSelect={() => toggleItem(item.requestId)}
											className='cursor-pointer'
										>
											<div
												className={cn(
													'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
													isSelected
														? 'bg-primary text-primary-foreground'
														: 'opacity-50'
												)}
											>
												{isSelected && <Check className='h-4 w-4' />}
											</div>
											{item.russian}
										</CommandItem>
									)
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	)
}
