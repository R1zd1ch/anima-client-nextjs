import { Footer } from '@/src/widgets/footer'
import { Header } from '@/src/widgets/header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header></Header>
			<main className='max-w-[1400px] min-h-[85vh] w-full mt-24 flex-grow'>
				{children}
			</main>
			<div className='w-full'>
				<Footer></Footer>
			</div>
		</>
	)
}
