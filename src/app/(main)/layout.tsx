import { Header } from '@/widgets/Header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
		</>
	)
}
