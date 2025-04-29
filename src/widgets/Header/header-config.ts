import {
	Calendar,
	CircleHelp,
	Dices,
	Library,
	Search,
	User,
} from 'lucide-react'
import { UserNavigation } from './ui'
import { SearchHeaderModal } from './ui'
import RandomAnimeButton from './ui/random-anime'

export const NAV_ITEMS = [
	{ title: 'Аниме', href: '/anime', icon: Library },
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
		component: UserNavigation,
	},
]
