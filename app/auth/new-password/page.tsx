import type { Metadata } from 'next'

import { NewPasswordForm } from '@/src/features/auth/ui'

export const metadata: Metadata = {
	title: 'Новый пароль',
}

export default function NewPasswordPage() {
	return <NewPasswordForm></NewPasswordForm>
}
