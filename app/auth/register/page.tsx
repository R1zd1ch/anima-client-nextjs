import { RegisterForm } from '@/src/features/auth/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создать аккаунт',
	description: 'Создать аккаунт Anima',
}

export default function RegisterPage() {
	return <RegisterForm></RegisterForm>
}
