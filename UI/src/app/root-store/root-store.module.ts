import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from 'src/app/modules/login/auth.module';
import { appReducers } from './app.reducer';
import { CoursesEffects } from './courses-store/effects/courses.effects';
import { AuthEffects } from './auth-store/effects/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
  ],
})
export class RootStoreModule {}
