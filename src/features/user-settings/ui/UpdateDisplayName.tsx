import {
	Card,
	CardContent,
	CardHeader,
	FormField,
	FormItem,
	FormMessage,
	Form,
	Input,
	Button,
} from '@/src/shared/components/ui'
import { useForm } from 'react-hook-form'
import {
	UpdateDisplayNameSchema,
	UpdateDisplayNameSchemaType,
} from '../schemas/update-displayname-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateProfileMutation } from '../hooks'
import { IUser } from '@/src/entities/user/model/types'

export function UpdateDisplayName({ user }: { user: IUser }) {
	const { update, IsLoadingUpdate } = useUpdateProfileMutation()
	const form = useForm<UpdateDisplayNameSchemaType>({
		resolver: zodResolver(UpdateDisplayNameSchema),
		values: { displayName: user.displayName },
	})

	const onSubmit = (values: UpdateDisplayNameSchemaType) => {
		update({
			displayName: values.displayName,
			isTwoFactorEnabled: user.isTwoFactorEnabled,
			email: user.email,
		})
	}
	if (!user.displayName) return null

	return (
		<Card className='gap-0 p-2'>
			<CardHeader className='p-2 gap-1'>
				<h2 className='font-bold'>Никнейм</h2>
				<div className='text-muted-foreground text-xs'>
					<p>Изменить ваш никнейм</p>
					<p>
						Этот никнейм будет отображаться в вашем профиле и будет виден другим
						пользователям
					</p>
				</div>
			</CardHeader>
			<CardContent className='p-2'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-row w-full gap-2'
					>
						<FormField
							control={form.control}
							name='displayName'
							render={({ field }) => (
								<FormItem className='max-w-1/2 w-1/2'>
									<Input
										placeholder={user.displayName}
										disabled={IsLoadingUpdate}
										{...field}
									/>
									<FormMessage />
								</FormItem>
							)}
						></FormField>
						<Button>Обновить</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
