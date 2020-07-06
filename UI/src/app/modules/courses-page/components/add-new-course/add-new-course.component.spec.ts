import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseComponent } from './add-new-course.component';

describe('AddNewCourseComponent', (): void => {
  let component: AddNewCourseComponent;
  let fixture: ComponentFixture<AddNewCourseComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [AddNewCourseComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(AddNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
