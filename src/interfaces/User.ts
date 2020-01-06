export interface IUser {
	id: number
	first_name: string
	last_name: string
	email: string
}

export interface IUserResponse {
	data: IUser[]
}
