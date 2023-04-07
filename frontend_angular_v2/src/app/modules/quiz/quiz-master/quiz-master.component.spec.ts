import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Quiz } from 'src/app/models/quiz';
// import * as jasmine from 'jasmine';
import { QuizService } from 'src/app/services/quiz/quiz.service';

import { QuizMasterComponent } from './quiz-master.component';

describe('QuizMasterComponent', () => {
  let component: QuizMasterComponent;
  let service: QuizService;
  let fixture: ComponentFixture<QuizMasterComponent>;
  let de: DebugElement;
  let serviceStub: any;
  let spy: jasmine.Spy;
  let quizList: Quiz[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMasterComponent ],
      providers: [ QuizService ],
    }).compileComponents();
    // .compileComponents();
    service = TestBed.inject(QuizService);
  });

  beforeEach(() => {
    serviceStub = {
      getContent: (() => of(quizList)),
    };
    fixture = TestBed.createComponent(QuizMasterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(QuizService);
    spy = spyOn(service, 'getQuizDetails').and.returnValue(of(serviceStub));
    fixture.detectChanges();
  });

  it('should get quiz list from firestore', () => {
    // let quiz = service.getQuizDetails().subscribe(res=>{return res});
    // expect(service.quizServer.length).toBeGreaterThanOrEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toBeGreaterThanOrEqual(1);
  });
});
