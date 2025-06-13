export const SEASONS = ['winter', 'spring', 'summer', 'autumn'] as const
export type Season = (typeof SEASONS)[number]
export const SEASONS_RU = {
	fall: 'Осень',
	spring: 'Весна',
	summer: 'Лето',
	winter: 'Зима',
}
