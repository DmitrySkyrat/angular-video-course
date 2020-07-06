import { OrderByPipe } from './order-by.pipe';
import { CoursesPageComponent } from 'src/app/courses-page/courses-page.component';
import { Course } from '../models/course-item.model';

describe('OrderByPipe', (): void => {
  let pipe: OrderByPipe;
  let courseComponent: CoursesPageComponent;

  beforeEach((): void => {
    pipe = new OrderByPipe();
    courseComponent = new CoursesPageComponent(pipe);
  });
  it('create an instance', (): void => {
    expect(pipe).toBeTruthy();
  });
});
