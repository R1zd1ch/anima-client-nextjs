import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
			{
				protocol: 'https',
				hostname: 'fakeimg.pl',
			},
			{
				hostname: 'shikimori.one',
				protocol: 'https',
			},
		],
		dangerouslyAllowSVG: true,
	},
}

export default nextConfig
