import { Metadata } from 'next'

import { SettingsForm } from '@/features/user/components'

export const metadata: Metadata = {
	title: 'Настройки',
}

export default function SettingsPage() {
	return <SettingsForm></SettingsForm>
}
