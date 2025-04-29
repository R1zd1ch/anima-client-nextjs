'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/utils'
import { Button, ToggleTheme } from '@/shared/components/ui'
import { NAV_ITEMS, PRIMARY_NAV_ITEMS } from './header-config'
import { isActivePath } from '@/shared/utils/is-active-path'

export function Header() {
	const pathname = usePathname()
	const isAuthenticated = false // TODO: заменить на реальное состояние авториазции

	return (
		<header className='w-full fixed top-0 z-50 bg-background/90 backdrop-blur-sm border-b'>
			<div className='px-6 md:px-10 flex h-16 items-center justify-between max-w-[1400px] mx-auto'>
				<Link href='/' className='text-2xl font-bold'>
					AnimaHub
				</Link>

				<nav className='hidden md:flex gap-6'>
					{NAV_ITEMS.map((item, index) => (
						<Link key={index} href={item.href}>
							<Button
								variant={`${!isActivePath(pathname) ? 'default' : 'outline'}`}
								className={cn(
									'text-sm font-medium transition-colors',
									isActivePath(pathname) && 'text-primary'
								)}
							>
								{item.icon && <item.icon className='mr-2 h-4 w-4' />}
								{item.title}
							</Button>
						</Link>
					))}
				</nav>
				<div className='flex items-center gap-4'>
					<nav className='hidden md:flex gap-2'>
						<ToggleTheme></ToggleTheme>
						{PRIMARY_NAV_ITEMS.map((item, index) => (
							<div key={index}>
								{item.component && <item.component></item.component>}
							</div>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}
