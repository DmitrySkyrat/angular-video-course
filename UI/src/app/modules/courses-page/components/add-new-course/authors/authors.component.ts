import { Component, OnInit, ViewChild, forwardRef, Input } from '@angular/core';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';
import { AuthorsService } from 'src/app/modules/courses-page/services/authors.service';
import {
  IAuthor,
  ICourseAuthor,
} from 'src/app/modules/courses-page/models/course.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef((): unknown => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements OnInit, ControlValueAccessor {
  // tslint:disable-next-line:no-input-rename
  @Input('selectedAuthors') public extraOptions: IAuthor[];
  @ViewChild(SelectAutocompleteComponent)
  multiSelect: SelectAutocompleteComponent;
  constructor(private authorsService: AuthorsService) {}
  public textFragment = '';
  public options: IAuthor[] = [];
  public selectedOptions: string[] = [];
  public onChange: (selected: IAuthor[]) => void;
  public onTouched = (): void => {};
  public writeValue(newAuthor: ICourseAuthor[]): void {
    const selected = newAuthor?.map((option: ICourseAuthor): string =>
      option.id.toString()
    );
    this.selectedOptions = selected ? selected : [];
  }
  public registerOnChange(fn: (selected: IAuthor[]) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public ngOnInit(): void {
    this.authorsService
      .getAuthors(this.textFragment)
      .subscribe((array: IAuthor[]): void => {
        this.options = array;
        this.options.push(...this.extraOptions);
      });
  }
  public onToggleDropdown(): void {
    this.multiSelect.toggleDropdown();
  }
  public onResetSelection(): void {
    this.onChange([]);
    this.selectedOptions = [];
    this.onTouched();
  }
  onSelect(selectedOptions: string[]): void {
    const fullSelectedOptions = this.options.filter(
      (option: IAuthor): boolean => {
        return selectedOptions.includes(option.id);
      }
    );
    this.onChange(fullSelectedOptions);
  }
}
