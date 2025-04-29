import { RegisterForm } from '@/features/auth/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создать аккаунт',
	description: 'Создать аккаунт Anima',
}

export default function RegisterPage() {
	return <RegisterForm></RegisterForm>
}
