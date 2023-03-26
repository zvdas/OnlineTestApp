import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';

const routes: Routes = [
  { path: '', component: QuizDisplayComponent },
  { path: 'master', component: QuizMasterComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizRoutingModule { }
