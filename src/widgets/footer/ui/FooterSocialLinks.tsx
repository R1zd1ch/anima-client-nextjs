import { Button } from '@/src/shared/components/ui'
import { cn } from '@/src/shared/utils'
import Link from 'next/link'
import { FOOTER_SOCIAL_LINKS as socialLinks } from '@/src/shared/constants'

export function FooterSocialLinks({ className }: { className?: string }) {
	return (
		<div className={cn('flex flex-row gap-4', className)}>
			{socialLinks.map(({ href, icon: Icon, label }) => (
				<Link key={href} href={href}>
					<Button aria-label={label} variant='secondary'>
						<Icon />
					</Button>
				</Link>
			))}
		</div>
	)
}
