import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    QuizReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    LayoutModule,
    MatIconModule
  ]
})

export class ReviewModule { }
