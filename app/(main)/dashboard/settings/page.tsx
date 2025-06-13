import { Metadata } from 'next'

import { SettingsForm } from '@/src/features/user-profile/ui'

export const metadata: Metadata = {
	title: 'Настройки',
}

export default function SettingsPage() {
	return <SettingsForm></SettingsForm>
}
