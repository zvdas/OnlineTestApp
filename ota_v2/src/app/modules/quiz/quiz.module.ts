import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';



@NgModule({
  declarations: [
    QuizMasterComponent,
    QuizDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
