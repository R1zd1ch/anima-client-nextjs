import {
	FaGithub,
	FaTelegram,
	FaDiscord,
	FaTwitch,
	FaYoutube,
} from 'react-icons/fa'

export const FOOTER_SOCIAL_LINKS = [
	{
		href: 'https://github.com/AniLibria',
		icon: FaGithub,
		label: 'GitHub',
	},
	{
		href: 'https://t.me/AniLibria',
		icon: FaTelegram,
		label: 'Telegram',
	},
	{
		href: 'https://discord.gg/AniLibria',
		icon: FaDiscord,
		label: 'Discord',
	},
	{
		href: 'https://www.twitch.tv/AniLibria',
		icon: FaTwitch,
		label: 'Twitch',
	},
	{
		href: 'https://www.youtube.com/channel/AniLibria',
		icon: FaYoutube,
		label: 'YouTube',
	},
] as const
