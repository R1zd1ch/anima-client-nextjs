import type { Metadata } from 'next'
import { ResetPasswordForm } from '@/src/features/auth/ui'

export const metadata: Metadata = {
	title: 'Сброс пароля',
}

export default function ResetPasswordPage() {
	return <ResetPasswordForm></ResetPasswordForm>
}
