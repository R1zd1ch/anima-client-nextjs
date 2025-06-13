import { cn } from '@/src/shared/utils'
import { MultiselectButtonAnimeFilterProps } from '../model'
import { Button } from '@/src/shared/components/ui'

export function MultiselectButtonAnimeFilter({
	className,
	title,
	description,
	data,
	selectItem,
	selectedItems,
}: MultiselectButtonAnimeFilterProps) {
	const handleSelectItem = (item: string) => {
		const updated = selectedItems.includes(item)
			? selectedItems.filter(i => i !== item)
			: [...selectedItems, item]

		selectItem(updated)
	}

	return (
		<div className={cn('flex flex-col gap-2 px-4', className)}>
			<div>
				<h1 className='font-bold text-base'>{title}</h1>
				<p className='text-xs text-muted-foreground max-w-[90%]'>
					{description}
				</p>
			</div>
			<div className='flex flex-wrap gap-2'>
				{data.map((item, index) => {
					const selected = selectedItems.includes(item.value)
					return (
						<Button
							key={index}
							variant={selected ? 'default' : 'secondary'}
							onClick={() => handleSelectItem(item.value)}
						>
							{item.description}
						</Button>
					)
				})}
			</div>
		</div>
	)
}
