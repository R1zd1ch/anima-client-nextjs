'use client'
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Loading,
	Switch,
} from '@/shared/components/ui'
import { useProfile } from '@/shared/hooks'
import { UserButton, UserButtonLoading } from './UserButton'
import { SettingsSchema, TypeSettingsSchema } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useUpdateProfileMutation } from '../hooks'

export function SettingsForm() {
	const { user, isLoading } = useProfile()

	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		values: {
			name: user?.displayName || '',
			email: user?.email || '',
			isTwoFactorEnabled: user?.isTwoFactorEnabled || false,
		},
	})

	const { update, IsLoadingUpdate } = useUpdateProfileMutation()

	const onSubmit = (values: TypeSettingsSchema) => {
		update(values)
	}

	if (!user) return null

	return (
		<Card className='w-[400px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle>Настройки профиля</CardTitle>
				{isLoading ? (
					<UserButtonLoading></UserButtonLoading>
				) : (
					<UserButton user={user}></UserButton>
				)}
			</CardHeader>

			<CardContent>
				{isLoading ? (
					<Loading></Loading>
				) : (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='grid gap-2 space-y-2'
						>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Имя</FormLabel>
										<FormControl>
											<Input
												placeholder='Иван'
												{...field}
												disabled={IsLoadingUpdate}
											></Input>
										</FormControl>
										<FormMessage></FormMessage>
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Почта</FormLabel>
										<FormControl>
											<Input
												placeholder='d7N1o@example.com'
												disabled={IsLoadingUpdate}
												{...field}
											></Input>
										</FormControl>
										<FormMessage></FormMessage>
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name='isTwoFactorEnabled'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
										<div className='space-y-0.5'>
											<FormLabel>Двухфакторная аутентефикация</FormLabel>
											<FormDescription>
												Включите двухфакторную аутентефикациб для вашей учётной
												записи
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
												disabled={IsLoadingUpdate}
											></Switch>
										</FormControl>
										<FormMessage></FormMessage>
									</FormItem>
								)}
							></FormField>

							<Button type='submit' disabled={IsLoadingUpdate}>
								Сохранить
							</Button>
						</form>
					</Form>
				)}
			</CardContent>
		</Card>
	)
}
