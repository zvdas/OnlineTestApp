import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';

const routes: Routes = [
  { path: '', component: QuizReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReviewRoutingModule { }
