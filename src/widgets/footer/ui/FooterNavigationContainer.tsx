import { SITE_NAVIGATION, USER_NAVIGATION } from '@/src/shared/constants'
import { FooterNavigationList } from './FooterNavigationList'
import { cn } from '@/src/shared/utils'
import { Separator } from '@/src/shared/components/ui'

export function FooterNavigationContainer({
	className,
}: {
	className?: string
}) {
	return (
		<div
			className={cn(
				'flex flex-row justify-between w-full mx-10 ml-20',
				className
			)}
		>
			<FooterNavigationList
				items={SITE_NAVIGATION}
				title='Навигация'
			></FooterNavigationList>
			<div className='my-4'>
				<Separator orientation='vertical'></Separator>
			</div>
			<FooterNavigationList
				items={USER_NAVIGATION}
				title='Пользователь'
			></FooterNavigationList>
		</div>
	)
}
