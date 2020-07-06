import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/feature/login/auth.module';
import { CoursesPageModule } from './modules/feature/courses-page/courses-page.module';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: (): Promise<CoursesPageModule> =>
      import('./modules/feature/courses-page/courses-page.module').then(
        (coursesMod): CoursesPageModule => coursesMod.CoursesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: (): Promise<AuthModule> =>
      import('./modules/feature/login/auth.module').then(
        (loginMod): AuthModule => loginMod.AuthModule
      ),
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
