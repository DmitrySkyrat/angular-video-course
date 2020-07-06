import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    SelectAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class MaterialModule {}
