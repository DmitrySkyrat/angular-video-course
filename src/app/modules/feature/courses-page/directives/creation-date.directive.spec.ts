import { CreationDateDirective } from './creation-date.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CourseComponent } from '../courses-page/course/course.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DurationPipe } from '../pipes/duration.pipe';

describe('CreationDateDirective', (): void => {
  let fixture: ComponentFixture<CourseComponent>;
  let elements: DebugElement[];
  beforeEach((): void => {
    fixture = TestBed.configureTestingModule({
      declarations: [CreationDateDirective, DurationPipe, CourseComponent],
    }).createComponent(CourseComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    elements = fixture.debugElement.queryAll(
      By.directive(CreationDateDirective)
    );
  });
  xit('should have one element', (): void => {
    expect(elements.length).toBe(1);
  });
});
