import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})

export class ResultModule { }