import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserService } from './services/user/user.service';
import { QuizService } from './services/quiz/quiz.service';
import { AnswersService } from './services/answers/answers.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';
import { ResultModule } from './modules/result/result.module';
import { ReviewModule } from './modules/review/review.module';
import { LayoutModule } from './modules/layout/layout.module';
import { StringToNumberPipe } from './pipes/string-to-number.pipe';

@NgModule({
  declarations: [AppComponent, StringToNumberPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthenticationModule,
    QuizModule,
    LayoutModule,
    ResultModule,
    ReviewModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [UserService, QuizService, AnswersService],
  bootstrap: [AppComponent],
})

export class AppModule {}
