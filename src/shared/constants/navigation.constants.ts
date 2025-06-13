import {
	Bookmark,
	Settings,
	History,
	Home,
	Search,
	User,
	Calendar,
	Shuffle,
	Users,
	CircleHelp,
} from 'lucide-react'

export const SITE_NAVIGATION = [
	{
		href: '/',
		icon: Home,
		label: 'Главная',
	},
	{
		href: '/catalog',
		icon: Search,
		label: 'Каталог',
	},
	{
		href: '/schedule',
		icon: Calendar,
		label: 'Расписание',
	},
	{
		href: '/random',
		icon: Shuffle,
		label: 'Случайное',
	},
	{
		href: '/team',
		icon: Users,
		label: 'Команда',
	},
]

export const USER_NAVIGATION = [
	{
		href: '/profile',
		icon: User,
		label: 'Профиль',
	},
	{
		href: '/bookmarks',
		icon: Bookmark,
		label: 'Закладки',
	},
	{
		href: '/history',
		icon: History,
		label: 'История',
	},
	{
		href: '/settings',
		icon: Settings,
		label: 'Настройки',
	},
]
