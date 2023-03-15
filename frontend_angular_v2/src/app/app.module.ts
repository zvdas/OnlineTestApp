import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './modules/quiz/quiz.module';
import { ResultModule } from './modules/result/result.module';
import { ReviewModule } from './modules/review/review.module';
import { UserModule } from './modules/user/user.module';
import { UserService } from './services/user/user.service';
import { QuizService } from './services/quiz/quiz.service';
import { AnswersService } from './services/answers/answers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringToNumberPipe } from './pipes/string-to-number.pipe';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { DummyComponent } from './authentication/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    StringToNumberPipe,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    ReviewModule,
    ResultModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    UserService,
    QuizService,
    AnswersService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }