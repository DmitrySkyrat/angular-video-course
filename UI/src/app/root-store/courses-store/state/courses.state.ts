import { ICourse } from 'src/app/modules/courses-page/models/course.model';

export interface ICoursesState {
  courses: ICourse[];
  errorMessage: string;
}

export const initialCoursesState: ICoursesState = {
  courses: [],
  errorMessage: null,
};
