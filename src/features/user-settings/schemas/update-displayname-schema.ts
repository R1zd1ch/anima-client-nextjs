import { z } from 'zod'

export const UpdateDisplayNameSchema = z.object({
	displayName: z.string().min(1, {
		message: 'Введите имя',
	}),
})

export type UpdateDisplayNameSchemaType = z.infer<
	typeof UpdateDisplayNameSchema
>
