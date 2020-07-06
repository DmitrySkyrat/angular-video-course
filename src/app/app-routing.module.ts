import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/feature/login/auth.module';
import { CoursesPageModule } from './modules/feature/courses-page/courses-page.module';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: (): Promise<CoursesPageModule> =>
      import('./modules/feature/courses-page/courses-page.module').then(
        (m): CoursesPageModule => m.CoursesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: (): Promise<AuthModule> =>
      import('./modules/feature/login/auth.module').then(
        (m): AuthModule => m.AuthModule
      ),
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
