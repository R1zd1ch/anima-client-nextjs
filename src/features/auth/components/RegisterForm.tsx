'use client'

import { useForm } from 'react-hook-form'
import { AuthWrapper } from './AuthWrapper'
import { RegisterSchema, RegisterSchemaType } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@/shared/components/ui'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'sonner'
import { useRegisterMutation } from '../hooks'

export function RegisterForm() {
	const { theme } = useTheme()
	const [reCaptchaValue, setReCaptchaValue] = useState<string | null>(null)

	const form = useForm<RegisterSchemaType>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	})

	const { register, isLoadingRegister } = useRegisterMutation()

	const onSubmit = (values: RegisterSchemaType) => {
		if (reCaptchaValue) {
			register({ values, recaptcha: reCaptchaValue })
		} else {
			toast.error('Пожалуйста, подтвердите, что вы не робот')
		}
	}

	return (
		<AuthWrapper
			heading='Регистрация'
			description='Чтобы войти на сайт, введите ваш email и пароль'
			backButtonLabel='Есть аккаунт? Войти'
			backButtonHref='/auth/login'
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-2 grid gap-2'
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
										disabled={isLoadingRegister}
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
										disabled={isLoadingRegister}
										{...field}
									></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='******'
										disabled={isLoadingRegister}
										{...field}
									></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='passwordRepeat'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Повторите пароль</FormLabel>
								<FormControl>
									<Input
										placeholder='******'
										type='password'
										disabled={isLoadingRegister}
										{...field}
									></Input>
								</FormControl>
								<FormMessage></FormMessage>
							</FormItem>
						)}
					></FormField>
					<div className='flex justify-center'>
						<ReCAPTCHA
							key={theme}
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={value => setReCaptchaValue(value)}
							theme={theme === 'dark' ? 'dark' : 'light'}
						></ReCAPTCHA>
					</div>
					<Button type='submit' disabled={isLoadingRegister}>
						Создать аккаунт
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
