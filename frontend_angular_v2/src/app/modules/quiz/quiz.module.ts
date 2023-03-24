import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    QuizMasterComponent,
    QuizDisplayComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    // FormsModule,
    // MatListModule,
    MatIconModule,
    LayoutModule,
  ]
})

export class QuizModule { }
