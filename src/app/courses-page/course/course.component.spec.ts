import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';

describe('CourseComponent', (): void => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
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
