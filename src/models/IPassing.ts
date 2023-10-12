import { Image } from './IImage'

export interface PassingCourseLessonMaterial {
	title: string;
	file: string;
}

export interface PassingCourseLesson {
	title: string;
	description: string;
	image: Image;

	video: {
		fileNameUser: string;
		fileNameSystem: string;
		indexFile: string;
		path: string;
	};

	materials: PassingCourseLessonMaterial[];
}

export interface PassingCourse {
	_id: string;
	title: string;
	image: Image;
	description: string;
	masterName: string;
	completedLessons: number[];

	lessons: PassingCourseLesson[];
}
