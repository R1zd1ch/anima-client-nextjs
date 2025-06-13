import { useAnimeFilters } from '@/src/entities/filter'
import {
	MultiselectButtonAnimeFilter,
	SelectAnimeFilter,
	SimpleSelectAnimeFilter,
	SliderAnimeFilter,
} from '@/src/features/advanced-search-anime'
import { useAdvancedAnimeSearch } from '@/src/features/advanced-search-anime/model'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Separator,
} from '@/src/shared/components/ui'
import { cn } from '@/src/shared/utils'
import { CatalogFiltersLoader } from './CatalogFiltersLoader'

export function CatalogFilter({ className }: { className?: string }) {
	const { filterReferences, isLoading } = useAnimeFilters()
	const { setFilter, filters } = useAdvancedAnimeSearch()

	if (isLoading) {
		return (
			<CatalogFiltersLoader
				className={cn(className, 'w-full')}
			></CatalogFiltersLoader>
		)
	}

	return (
		<Card className={cn(className, 'w-full p-0 pb-4 gap-0')}>
			<CardHeader className='p-4 pb-0 gap-0 mb-4'>
				<CardTitle className='text-lg p-0'>Фильтры</CardTitle>
				<CardDescription className='text-xs p-0 max-w-11/12'>
					Настройте параметры поиска для более точного подбора аниме
				</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent className='p-0 flex flex-col gap-4 mt-4'>
				<MultiselectButtonAnimeFilter
					title='Тип'
					description='Укажите типы релизов, по которым будут отфильтрованы все релизы'
					data={filterReferences?.types || []}
					selectItem={(value: string[]) => setFilter('types', value)}
					selectedItems={filters.types || []}
				></MultiselectButtonAnimeFilter>
				<Separator />
				<MultiselectButtonAnimeFilter
					title='Возрастной рейтинг'
					description='Укажите года выхода релиза, по которым будут отфильтрованы все тайтлы в каталоге'
					data={filterReferences?.ratings || []}
					selectItem={(value: string[]) => setFilter('age_ratings', value)}
					selectedItems={filters.age_ratings || []}
				></MultiselectButtonAnimeFilter>
				<Separator />
				<MultiselectButtonAnimeFilter
					title='Сезоны'
					description='Укажите желаемые сезоны выхода релизов, по которым будут отфильтрованы все тайтлы в каталоге'
					data={filterReferences?.seasons || []}
					selectItem={(value: string[]) => setFilter('seasons', value)}
					selectedItems={filters.seasons || []}
				></MultiselectButtonAnimeFilter>
				<Separator />
				<SliderAnimeFilter
					title='Период выхода'
					description='Укажите года выхода релиза, по которым будут отфильтрованы все тайтлы в каталоге'
					data={filterReferences?.years || []}
					selectItem={(min_year: number, max_year: number) => {
						setFilter('min_year', min_year)
						setFilter('max_year', max_year)
					}}
					selectedItems={[filters.min_year || 1995, filters.max_year || 2025]}
				></SliderAnimeFilter>
				<Separator />
				<SelectAnimeFilter
					title='Темы'
					description='Укажите темы релизов, по которым будут отфильтрованы все релизы'
					data={filterReferences?.themes || []}
					selectItem={(value: number[]) => setFilter('themes', value)}
					selectedItems={filters.themes || []}
				></SelectAnimeFilter>
				<Separator />
				<SelectAnimeFilter
					title='Жанры'
					description='Укажите жанры релизов, по которым будут отфильтрованы все релизы'
					data={filterReferences?.genres || []}
					selectItem={(value: number[]) => setFilter('genres', value)}
					selectedItems={filters.genres || []}
				></SelectAnimeFilter>
				<Separator />
				<SelectAnimeFilter
					title='Аудитория'
					description='Укажите аудиторию релизов, по которым будут отфильтрованы все релизы'
					data={filterReferences?.demographics || []}
					selectItem={(value: number[]) => setFilter('demographics', value)}
					selectedItems={filters.demographics || []}
				></SelectAnimeFilter>
				<Separator />

				<SimpleSelectAnimeFilter
					title='Сортировка'
					description='Укажите способ сортировки для отображения всех тайтлов в каталоге'
					data={filterReferences?.sortings || []}
					selectedItem={filters.sort || ''}
					selectItem={(value: string) => setFilter('sort', value)}
				></SimpleSelectAnimeFilter>
			</CardContent>
		</Card>
	)
}
