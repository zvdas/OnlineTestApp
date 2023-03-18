import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ResultRoutingModule } from './result-routing.module';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    MatIconModule
  ]
})

export class ResultModule { }
