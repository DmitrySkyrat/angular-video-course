import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';

describe('CourseComponent', (): void => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationPipe],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
describe('CourseComponent', (): void => {
  let courseComponent: CourseComponent;
  beforeEach((): void => {
    courseComponent = new CourseComponent();
  });
  it('should delete course by EventEmitter', (): void => {
    let emitResult: number = null;
    const outputId = 2;
    courseComponent.deleteById.subscribe((id: number) => (emitResult = id));
    courseComponent.deleteCourse(outputId);
    expect(emitResult).toBe(outputId);
  });
});
