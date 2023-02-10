import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuizMasterComponent,
    QuizDisplayComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    QuizMasterComponent,
    QuizDisplayComponent
  ]
})

export class QuizModule { }