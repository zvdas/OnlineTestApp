import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDisplayComponent } from './quiz-display.component';

describe('QuizDisplayComponent', () => {
  let component: QuizDisplayComponent;
  let fixture: ComponentFixture<QuizDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
