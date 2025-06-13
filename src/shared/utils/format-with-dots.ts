export function formatWithDots(
	values: (string | number | null | undefined)[]
): string {
	return values.filter(Boolean).join(' • ')
}
