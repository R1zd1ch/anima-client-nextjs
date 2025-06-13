'use client'

import { useSettingsNav } from '../hooks'
import SettingsMenuItem from './SettingsMenuItem'

export function UserSettingsMenu() {
	const items = useSettingsNav()

	return (
		<aside className='w-1/5 pr-6'>
			<nav className='flex flex-col gap-1'>
				{items.map(({ href, label, isActive, icon }) => (
					<SettingsMenuItem
						key={href}
						item={{ href, label, isActive, icon }}
					></SettingsMenuItem>
				))}
			</nav>
		</aside>
	)
}
