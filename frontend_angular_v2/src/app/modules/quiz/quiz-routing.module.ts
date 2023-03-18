import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';

const routes: Routes = [
  { path: '', component: QuizDisplayComponent },
  { path: 'master', component: QuizMasterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizRoutingModule { }
