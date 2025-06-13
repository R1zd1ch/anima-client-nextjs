import { cn } from '@/src/shared/utils'
import Link from 'next/link'
import Image from 'next/image'

import { Logo, Separator } from '@/src/shared/components/ui'
import { FooterSocialLinks } from './FooterSocialLinks'
import { FooterNavigationContainer } from './FooterNavigationContainer'

interface FooterProps {
	className?: string
}

export function Footer({ className }: FooterProps) {
	const currentYear = new Date().getFullYear()
	return (
		<footer className={(cn('flex bg-card w-full'), className)}>
			<div className='bg-card w-full flex items-center justify-center'>
				<div className='max-w-[1400px] w-full py-10 flex flex-col gap-2'>
					<div className='flex flex-row gap-40'>
						<div className='flex items-center gap-4 flex-1'>
							<div className='flex-shrink-0'>
								<Logo showText={false} size='md'></Logo>
							</div>

							<div className='flex flex-col justify-start'>
								<h2 className='text-2xl font-extrabold'>AnimaHub</h2>
								<div className='text-xs text-muted-foreground font-medium'>
									<p>Спасибо, что выбрали AnimaHub для просмотра аниме!</p>
									<p>
										Мы стремимся предоставить вам лучший опыт просмотра аниме с
										удобным интерфейсом, широким выбором контента и постоянными
										обновлениями.
									</p>
									<p>
										Если у вас есть вопросы или предложения, не стесняйтесь
										обращаться к нам. Мы всегда рады помочь и сделать ваш опыт
										еще лучше!
									</p>
								</div>
							</div>
						</div>
						<FooterNavigationContainer className='flex-1'></FooterNavigationContainer>
					</div>
					<div className='w-full'>
						<Separator className='my-4' />
					</div>
					<div className='flex flex-row justify-between'>
						<div className='flex flex-col text-muted-foreground text-[10px] font-medium'>
							<div>
								Весь материал на сайте представлен исключительно для домашнего
								ознакомительного просмотра
							</div>
							<div>
								В случаях нарушения авторских прав — обращайтесь на почту:{' '}
								<span className='font-semibold text-accent-foreground'>
									copyrights@animahub.com
								</span>
							</div>
							<div>
								Для связи с нами по вопросам рекламы и сотрудничества:{' '}
								<span className='font-semibold text-accent-foreground'>
									contact@animahub.com
								</span>
							</div>
							<p className=' text-muted-foreground font-medium pt-2'>
								© 2024-{currentYear} AnimaHub. Все права защищены.
							</p>
						</div>
						<FooterSocialLinks></FooterSocialLinks>
					</div>
				</div>
			</div>
		</footer>
	)
}
