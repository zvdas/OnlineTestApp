import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { QuizService } from './services/quiz/quiz.service';
import { UserService } from './services/user/user.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { ResultModule } from './modules/result/result.module';
import { ReviewModule } from './modules/review/review.module';
import { LayoutModule } from './modules/layout/layout.module';
import { StringToNumberPipe } from './pipes/string-to-number.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { MatDialogRef } from '@angular/material/dialog';

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
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [QuizService, UserService, AuthGuard],
  bootstrap: [AppComponent],
})

export class AppModule {}
