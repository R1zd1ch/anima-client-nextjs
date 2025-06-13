'use client'
import { useAdvancedAnimeSearch } from '@/src/features/advanced-search-anime/model'
import {
	CatalogFilter,
	CatalogHeader,
	CatalogList,
} from '@/src/widgets/anime-catalog'
import { useState } from 'react'

export function CatalogPage() {
	const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true)
	const { clearFilters } = useAdvancedAnimeSearch()
	return (
		<div className='flex flex-col gap-4 relative'>
			<CatalogHeader
				isFilterVisible={isFilterVisible}
				setIsFilterVisible={setIsFilterVisible}
				onClearFilters={clearFilters}
			></CatalogHeader>
			<div className='flex flex-row justify-between w-full gap-4 '>
				<CatalogList className='flex-2  overflow-y-auto flex flex-col gap-1' />
				{isFilterVisible && (
					<div className='flex-1 flex items-end flex-shrink-0 w-full'>
						<div className='sticky bottom-4 w-full'>
							<CatalogFilter className='w-full' />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
