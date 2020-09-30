import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', (): void => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
