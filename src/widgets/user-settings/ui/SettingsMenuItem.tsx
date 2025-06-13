import { Button } from '@/src/shared/components/ui'
import { IMenuSettingsItem } from '../model'
import Link from 'next/link'
import { cn } from '@/src/shared/utils'

export default function SettingsMenuItem({
	item,
}: {
	item: IMenuSettingsItem
}) {
	const { href, label, isActive, icon: Icon } = item

	return (
		<Button
			asChild
			variant={isActive ? 'secondary' : 'ghost'}
			className={cn('justify-start gap-2')}
		>
			<Link href={href}>
				{Icon && <Icon size={16} />}
				<span>{label}</span>
			</Link>
		</Button>
	)
}
