import { Calendar, CircleHelp, Library } from 'lucide-react'
import { SearchHeaderModal } from '../ui/SearchModalButton'
import { RandomAnimeButton } from '../ui/RandomAnimeButton'
import { ProfileNavigateDropDown } from '@/src/features/user-profile/ui/ProfileNavigateDropDown'

export const NAV_ITEMS = [
	{ title: 'Аниме', href: '/anime/catalog', icon: Library },
	{ title: 'Расписание', href: '/schedule', icon: Calendar },
	{ title: 'FAQ', href: '/faq', icon: CircleHelp },
]

export const PRIMARY_NAV_ITEMS = [
	{
		label: 'Поиск',
		component: SearchHeaderModal,
	},
	{
		label: 'Рандом',
		component: RandomAnimeButton,
	},
	{
		label: 'Пользователь',
		component: ProfileNavigateDropDown,
	},
]
