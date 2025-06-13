import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, JSX, RefAttributes } from 'react'

export function SimpleAnimeSearchAction({
	title,
	description,
	Component,
}: {
	title?: string
	description?: string
	Component: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
}) {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<Component className='size-40'></Component>
			<div className='flex flex-col items-center'>
				<p>{title}</p>
				<p className='text-sm text-muted-foreground'>{description} </p>
			</div>
		</div>
	)
}
