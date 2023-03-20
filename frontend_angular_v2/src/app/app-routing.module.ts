import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ErrorComponent } from './modules/layout/error/error.component';

const routes: Routes = [
  // /*
  {
    path: '',
    component: AppComponent
  },
  // */
  /* Lazy Load Modules */
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [AuthGuard],
  },
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
  /*
  {
    path: '',
    redirectTo: '/dashboard',
    // redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  */
  {
    path: 'layout',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})

export class AppRoutingModule {}
