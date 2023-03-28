import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    QuizMasterComponent,
    QuizDisplayComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class QuizModule { }
