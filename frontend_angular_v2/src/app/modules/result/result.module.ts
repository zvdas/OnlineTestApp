import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    QuizResultComponent,
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    LayoutModule,
  ]
})

export class ResultModule { }
