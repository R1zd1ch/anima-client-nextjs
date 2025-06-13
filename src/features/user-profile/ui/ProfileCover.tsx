export function ProfileCover({ banner }: { banner?: string }) {
	return (
		<div
			className='w-full h-40 bg-muted overflow-hidden rounded-t-xl'
			style={{
				backgroundImage: `url(${banner})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		></div>
	)
}
