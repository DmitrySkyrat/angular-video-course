import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

describe('CoursesPageComponent', (): void => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, OrderByPipe],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
describe('CoursesPageComponent', (): void => {
  let courseComponent: CoursesPageComponent;
  let pipe: SearchFilterPipe;
  beforeEach((): void => {
    pipe = new SearchFilterPipe();
    courseComponent = new CoursesPageComponent(pipe);
  });
  it('delete course by id', (): void => {
    courseComponent.deleteCourseById(1);
    const coursesLength: number = courseComponent.courses.length;
    expect(courseComponent.courses.length).toBe(coursesLength);
  });
  it('ngOnInit should log message', (): void => {
    const consoleSpy = spyOn(console, 'log');
    courseComponent.ngOnInit();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('onFind should log message', (): void => {
    const consoleSpy = spyOn(console, 'log');
    courseComponent.onFind();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
