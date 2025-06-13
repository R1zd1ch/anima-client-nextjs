'use client'

import { useLatestAnime, usePopularOngoings } from '@/src/entities/anime/hooks'
import { AnimeSection } from './AnimeSection'

export function AnimeSectionsContainer() {
	const { latestAnime } = useLatestAnime()
	const { popularOngoings } = usePopularOngoings()

	return (
		<>
			<AnimeSection
				animes={latestAnime}
				title='Новые эпизоды'
				description='Самые новые и свежие эпизоды'
				href='/anime'
				buttonText='Смотреть все'
			/>
			<AnimeSection
				animes={popularOngoings}
				title='Самые популярные онгоинги'
				description='Самые популярные и ожидаемые аниме, которые сейчас выходят'
				href='/anime'
				buttonText='Смотреть все'
			/>
		</>
	)
}
