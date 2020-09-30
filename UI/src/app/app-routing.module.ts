import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/login/auth.module';
import { CoursesPageModule } from './modules/courses-page/courses-page.module';
import { ErrorComponent } from './modules/shared/components/error/error.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: (): Promise<CoursesPageModule> =>
      import('./modules/courses-page/courses-page.module').then(
        (coursesMod): CoursesPageModule => coursesMod.CoursesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: (): Promise<AuthModule> =>
      import('./modules/login/auth.module').then(
        (loginMod): AuthModule => loginMod.AuthModule
      ),
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
