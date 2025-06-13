'use client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { newUserVerification as newUserVerificationRequest } from '../api'
import { toast } from 'sonner'

export function useVerificationMutation() {
	const router = useRouter()

	const { mutate: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: (token: string | null) => newUserVerificationRequest(token),

		onSuccess() {
			toast.success('Почта успешно подтверждена')
			router.push('/dashboard/settings')
		},

		onError() {
			router.push('/auth/login')
		},
	})

	return { verification }
}
