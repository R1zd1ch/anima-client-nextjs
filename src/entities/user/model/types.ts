export enum UserRole {
	Regular = 'REGULAR',
	Admin = 'ADMIN',
}

export enum AuthMethod {
	Credentials = 'CREDENTIALS',
	Google = 'GOOGLE',
	Yandex = 'YANDEX',
}

export interface IAccount {
	id: string
	createdAt: Date
	updatedAt: Date
	type: string
	provider: string
	refreshToken: string
	accessToken: string
	expiresAt: number
	userId: string
}

export interface IUser {
	id: string
	username: string
	createdAt: Date
	updatedAt: Date
	email: string
	password: string
	displayName: string
	picture: string
	role: UserRole
	bio?: string
	isVerified: boolean
	isTwoFactorEnabled: boolean
	method: AuthMethod
	accounts: IAccount[]
}

export interface IUserIdentityInfoProps {
	user: IUser
	className?: string
}

export interface UserBioProps {
	user: IUser
	className?: string
}
