export interface CatalogHeaderProps {
	className?: string
	isFilterVisible: boolean
	setIsFilterVisible: (value: boolean) => void
	onClearFilters: () => void
}

export interface CatalogFiltersProps {
	className?: string
}

export interface CatalogListProps {
	className?: string
}
