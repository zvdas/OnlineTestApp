import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    QuizReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    LayoutModule,
  ]
})

export class ReviewModule { }
