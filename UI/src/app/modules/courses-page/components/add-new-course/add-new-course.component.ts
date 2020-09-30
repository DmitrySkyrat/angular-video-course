import { Component, OnInit } from '@angular/core';
import {
  IAuthor,
  VideoCourse,
  ICourseAuthor,
  IGetCourseByIdResponse,
  ICourse,
} from '../../models/course.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/internal/operators';
import { CoursesService } from '../../services/courses.service';
import { ObservableInput } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAppState } from 'src/app/root-store/app.state';
import { Store } from '@ngrx/store';
import {
  CreateCourse,
  UpdateCourse,
} from 'src/app/root-store/courses-store/actions/courses.actions';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss'],
})
export class AddNewCourseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
    private datePipe: DatePipe
  ) {}
  public form: FormGroup;
  public titleMaxLength = 50;
  public descriptionMaxLength = 500;
  public selectedCourseAuthors: IAuthor[] = [];
  public ngOnInit(): void {
    this.createForm();
    this.route.params
      .pipe(
        filter((params: Params): boolean => {
          const regexp: RegExp = /^[0-9]+$/;
          return regexp.test(params.id);
        }),
        mergeMap(
          (params: Params): ObservableInput<ICourse> => {
            return this.coursesService.getItemById(parseInt(params.id, 10));
          }
        )
      )
      .subscribe((course: ICourse): void => {
        this.form.get('id').patchValue(course.id);
        this.form.get('title').patchValue(course.name);
        this.form.get('description').patchValue(course.description);
        this.form
          .get('date')
          .patchValue(this.datePipe.transform(course.date, 'MM/dd/yyyy'));
        this.form.get('duration').patchValue(course.length);
        this.selectedCourseAuthors = course.authors.map(
          (courseAuthor: ICourseAuthor): IAuthor => {
            return {
              id: courseAuthor.id.toString(),
              name: courseAuthor.name + ' ' + courseAuthor.lastName,
            };
          }
        );
        this.form.get('authors').patchValue(course.authors);
      });
  }
  public cancel(): void {
    this.router.navigate(['/courses']);
  }
  public createForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      title: [
        '',
        [Validators.required, Validators.maxLength(this.titleMaxLength)],
      ],
      description: [
        '',
        [Validators.required, Validators.maxLength(this.descriptionMaxLength)],
      ],
      date: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      authors: [[], [Validators.required]],
    });
  }
  public onFormSubmit(): void {
    const authorsObject = new VideoCourse(this.form);
    this.form.markAsTouched();
    if (this.form.invalid) {
      return;
    }
    if (authorsObject.id) {
      this._store.dispatch(
        new UpdateCourse({
          id: authorsObject.id,
          name: authorsObject.name,
          description: authorsObject.description,
          date: authorsObject.date.toString(),
          length: authorsObject.length,
          authors: authorsObject.authors,
          isTopRated: authorsObject.isTopRated,
        })
      );
    } else {
      this._store.dispatch(
        new CreateCourse({
          name: authorsObject.name,
          description: authorsObject.description,
          date: authorsObject.date.toString(),
          length: authorsObject.length,
          authors: authorsObject.authors,
          isTopRated: authorsObject.isTopRated,
        })
      );
    }
    this.form.reset();
    this.router.navigate(['/courses']);
  }
}
