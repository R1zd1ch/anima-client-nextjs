import { useQuery } from '@tanstack/react-query'
import { searchAnime } from '../api/searchAnime'
import { useState } from 'react'
import { useDebounce } from '@/src/shared/hooks'

export function useSimpleAnimeSearch(delay: number = 300) {
	const [query, setQuery] = useState<string>('')
	const debouncedQuery = useDebounce(query, delay)

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['simpleSearchAnime', debouncedQuery],
		queryFn: async () => searchAnime(debouncedQuery),
		enabled: !!debouncedQuery,
	})

	return {
		animes: data?.data ?? null,
		isLoading,
		isError,
		error,
		query,
		setQuery,
	}
}
