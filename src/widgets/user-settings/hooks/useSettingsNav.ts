import { useParams, usePathname } from 'next/navigation'
import { settingsMenuItems } from '../model'

export function useSettingsNav() {
	const params = useParams()
	const pathname = usePathname()

	const username = params?.username as string
	const base = `/users/${username}/settings`

	const items = settingsMenuItems.map(item => {
		const href = `${base}/${item.key}`
		const isActive = pathname === href

		return {
			...item,
			href,
			isActive,
		}
	})

	return items
}
