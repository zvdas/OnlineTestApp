import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { LayoutModule } from '../layout/layout.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    QuizMasterComponent,
    QuizDisplayComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    LayoutModule,
  ]
})

export class QuizModule { }
