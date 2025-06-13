import { cn } from '@/src/shared/utils'
import { Button } from '@/src/shared/components/ui'
import Link from 'next/link'
import { TNavigationItem } from '@/src/shared/types'

export function FooterNavigationList({
	className,
	items,
	title,
}: {
	className?: string
	title?: string
	items: TNavigationItem[]
}) {
	return (
		<div className={cn('flex flex-col gap-1', className)}>
			<div className='flex flex-row'>
				<div className='h-2 w-2'></div>
				<h1 className='font-bold text-md'>{title}</h1>
			</div>
			<div className='flex flex-col gap-0'>
				{items.map((item, index) => (
					<Link href={item.href} key={index} className='text-muted-foreground'>
						<Button variant='ghost' className='justify-start p-2 h-auto'>
							<div className='flex flex-row gap-1 items-center'>
								{item.icon && <item.icon className='h-4 w-4' />}
								<span>{item.label}</span>
							</div>
						</Button>
					</Link>
				))}
			</div>
		</div>
	)
}
