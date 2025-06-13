import { UserSettingsMenu } from '@/src/widgets/user-settings'

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex flex-row gap-2'>
			<UserSettingsMenu></UserSettingsMenu>
			<div className='w-1 border-l-1'></div>
			<main className='max-w-3/5 w-full'>{children}</main>
		</div>
	)
}
