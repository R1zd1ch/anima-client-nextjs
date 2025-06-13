'use client'

import { useForm } from 'react-hook-form'
import { AuthWrapper } from './AuthWrapper'
import { LoginSchema, LoginSchemaType } from '../schemas'
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
} from '@/src/shared/components/ui'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { toast } from 'sonner'
import ReCAPTCHA from 'react-google-recaptcha'
import { useLoginMutation } from '../hooks'
import Link from 'next/link'

export function LoginForm() {
	const { theme } = useTheme()
	const [reCaptchaValue, setReCaptchaValue] = useState<string | null>(null)
	const [isShowTwoFactor, setIsShowTwoFactor] = useState<boolean>(false)

	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { login, isLoadingLogin } = useLoginMutation(setIsShowTwoFactor)

	const onSubmit = (values: LoginSchemaType) => {
		if (reCaptchaValue) {
			login({ values, recaptcha: reCaptchaValue })
		} else {
			toast.error('Пожалуйста, подтвердите, что вы не робот')
		}
	}

	return (
		<AuthWrapper
			heading='Войти'
			description='Чтобы войти на сайт, введите ваш email и пароль'
			backButtonLabel='Нет аккаунта? Зарегистрироваться'
			backButtonHref='/auth/register'
			isShowSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-2 grid gap-2'
				>
					{isShowTwoFactor && (
						<FormField
							control={form.control}
							name='code'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Код</FormLabel>
									<FormControl>
										<Input
											placeholder='123456'
											disabled={isLoadingLogin}
											{...field}
										></Input>
									</FormControl>
									<FormMessage></FormMessage>
								</FormItem>
							)}
						></FormField>
					)}
					{!isShowTwoFactor && (
						<>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Почта</FormLabel>
										<FormControl>
											<Input
												placeholder='d7N1o@example.com'
												disabled={isLoadingLogin}
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
										<div className='flex items-center justify-between'>
											<FormLabel>Пароль</FormLabel>
											<Link
												href={'/auth/reset-password'}
												className='ml-auto inline-bloc text-sm underline'
											>
												Забыли пароль?
											</Link>
										</div>
										<FormControl>
											<Input
												type='password'
												placeholder='******'
												disabled={isLoadingLogin}
												{...field}
											></Input>
										</FormControl>
										<FormMessage></FormMessage>
									</FormItem>
								)}
							></FormField>{' '}
						</>
					)}

					<div className='flex justify-center'>
						<ReCAPTCHA
							key={theme}
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={value => setReCaptchaValue(value)}
							theme={theme === 'dark' ? 'dark' : 'light'}
						></ReCAPTCHA>
					</div>
					<Button type='submit' disabled={isLoadingLogin}>
						Войти в аккаунт
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
