export interface UserCourse {
	courseId: string
	completedLessons: number[]
	dateCreate: string
	certificate: string
}

export interface User {
	_id: string

	email: string
	name: string
	surname: string
	courses: UserCourse[]
}