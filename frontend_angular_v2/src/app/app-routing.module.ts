import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { ErrorComponent } from './modules/layout/error/error.component';
import { HomeComponent } from './modules/layout/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  /* Lazy Load Modules */
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  /* Authorized Routes */
  {
    path: 'quiz',
    loadChildren: () =>
      import('./modules/quiz/quiz.module').then((m) => m.QuizModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./modules/result/result.module').then((m) => m.ResultModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./modules/review/review.module').then((m) => m.ReviewModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})

export class AppRoutingModule { }
