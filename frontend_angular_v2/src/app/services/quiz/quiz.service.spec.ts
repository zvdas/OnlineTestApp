import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import * as jasmine from 'jasmine';
import { of } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { QuizService } from './quiz.service';
import { QuizMasterComponent } from 'src/app/modules/quiz/quiz-master/quiz-master.component';

describe('QuizService', () => {
  // let component: QuizMasterComponent;
  let service: QuizService;
  // let fixture: ComponentFixture<QuizMasterComponent>;
  // let de: DebugElement;
  // let serviceStub: any;
  // let spy: jasmine.Spy;

  beforeEach(() => {
    /*
    serviceStub = {
      getContent: () => of('You have been warned'),
    };
    */

    TestBed.configureTestingModule({
      /*
      declarations: [QuizMasterComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ],
      // providers: [{ provide: QuizService, useValue: serviceStub }]
      providers: [QuizService],
    })
    .compileComponents();

    */
    });

    service = TestBed.inject(QuizService);
  });


  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMasterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(QuizService);

    spy = spyOn(service, 'getQuizDetails').and.returnValue(of());

    fixture.detectChanges();
  })
  */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  const quizObject = {
    id: '0',
    question: 'test question',
    optionA: 'option a',
    optionB: 'option b',
    optionC: 'option c',
    optionD: 'option d',
    answer: 'answer'
  };

  it('should create a new quiz object to the firestore collection', () => {
    service.addQuizDetails(quizObject);
    expect(service.quizServer.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove a created quiz object from the firestore collection', () => {
    service.addQuizDetails(quizObject);
    service.deleteQuizDetails(quizObject.id);
    expect(service.quizServer.length).toBeLessThan(1);
  });
  */

});
