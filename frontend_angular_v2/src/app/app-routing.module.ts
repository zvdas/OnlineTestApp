import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*
  {path:'register'},
  {path:'login'},
  {path:'userMaster'},
  {path:'quizMaster'},
  {path:'quizDisplay'},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'**'}
  */
 /* Lazy Load Modules */
 {
  path: 'auth',
  loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }