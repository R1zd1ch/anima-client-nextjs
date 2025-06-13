export const AGE_RATINGS = [
	{
		value: 'g',
		label: 'G',
		description: 'Детям до 7 лет',
	},
	{
		value: 'pg',
		label: 'PG',
		description: 'Детям до 12 лет',
	},
	{
		value: 'pg_13',
		label: 'PG-13',
		description: 'Детям до 13 лет',
	},
	{
		value: 'r',
		label: 'R',
		description: 'Детям до 17 лет',
	},
	{
		value: 'r_plus',
		label: 'R+',
		description: 'Детям до 18 лет',
	},
] as const

export type AgeRating = (typeof AGE_RATINGS)[number]
