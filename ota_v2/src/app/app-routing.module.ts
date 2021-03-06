import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDisplayComponent } from './modules/quiz/quiz-display/quiz-display.component';
import { QuizMasterComponent } from './modules/quiz/quiz-master/quiz-master.component';
import { UserMasterComponent } from './modules/user/user-master/user-master.component';
import { ErrorComponent } from './modules/user/error/error.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'userMaster', component:UserMasterComponent},
  {path:'quizMaster', component:QuizMasterComponent},
  {path:'quizDisplay', component:QuizDisplayComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }