'use client'
import { Button } from '@/src/shared/components/ui'
import { FaGoogle, FaYandex } from 'react-icons/fa'
import { useAuthSocialMutation } from '../hooks'
import { useRouter } from 'next/navigation'

export function AuthSocial() {
	const router = useRouter()
	const { mutateAsync, isLoadingOauth } = useAuthSocialMutation()

	const onClick = async (provider: 'google' | 'yandex') => {
		const response = await mutateAsync(provider)

		console.log(response)

		if (response) {
			router.push(response.url)
		}
	}
	return (
		<>
			<div className='grid grid-cols-2 gap-6'>
				<Button onClick={() => onClick('google')} variant={'outline'}>
					<FaGoogle className='mr-2 size-4'></FaGoogle>
					Google
				</Button>
				<Button onClick={() => onClick('yandex')} variant={'outline'}>
					<FaYandex className='mr-2 size-4'></FaYandex>
					Яндекс
				</Button>
			</div>
			<div className='relative mb-2 space-y-4'>
				<div className='absolute inset-0 top-2 flex items-center'>
					<span className='w-full border-t'></span>
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>или</span>
				</div>
			</div>
		</>
	)
}
