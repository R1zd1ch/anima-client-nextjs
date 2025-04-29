import { z } from 'zod'

export const ResetPasswordSchema = z.object({
	email: z.string().email({
		message: 'Некорректная почта',
	}),
})
export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>
