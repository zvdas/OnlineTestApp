import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { FormComponent } from '../../layout/form/form.component';
import { FormInputData } from 'src/app/models/form-input-data';
import { QuizTable } from 'src/app/models/quiz-table';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {

  quiz: Quiz = {} as Quiz;
  quizList: Quiz[] = [];
  isLoaded: boolean = false;

  formInputData: FormInputData = {
    mainTitle: 'Quiz',
    formTitles: ['ID', 'Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer'],
    formControlNames: ['id', 'question', 'optionA', 'optionB', 'optionC', 'optionD', 'answer'],
    formPlaceholders: ['Enter a question ID', 'Enter a question', 'Enter option A', 'Enter option B', 'Enter option C', 'Enter option D', 'Enter Answer'],
    inputFormGroup: new FormGroup({
      id: new FormControl(''),
      question: new FormControl(''),
      optionA: new FormControl(''),
      optionB: new FormControl(''),
      optionC: new FormControl(''),
      optionD: new FormControl(''),
      answer: new FormControl(''),
    }),
    component: FormComponent
  };

  tableData: QuizTable = {
    title: 'Quiz Questions',
    data: this.quizList,
    columns: [
      {key: 'index', label: '#'},
      {key: 'question', label: 'Question'},
      {key: 'optionA', label: 'Option A'},
      {key: 'optionB', label: 'Option B'},
      {key: 'optionC', label: 'Option C'},
      {key: 'optionD', label: 'Option D'},
      {key: 'answer', label: 'Answer'},
      {key: 'action', label: 'Action'},
    ]
  };

  constructor(private qs: QuizService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'DarkCyan';
    this.getQuizList();
  }

  updateQuizForm(quizData: any) {
    if(Object.keys(quizData).includes('id') && !quizData.id) {
      this.qs.addQuizDetails(quizData);
    } else if(!Object.keys(quizData).includes('id')) {
      this.qs.deleteQuizDetails(quizData);
    } else {
      this.qs.updateQuizDetails(quizData.id, quizData);
    }
  }

  getQuizList() {
    this.qs
      .getQuizDetails()
      .subscribe(res => {
        res.map(item => {
          this.quizList.push({
            id: item.payload.doc.id,
            question: JSON.parse(JSON.stringify(item.payload.doc.data())).question,
            optionA: JSON.parse(JSON.stringify(item.payload.doc.data())).optionA,
            optionB: JSON.parse(JSON.stringify(item.payload.doc.data())).optionB,
            optionC: JSON.parse(JSON.stringify(item.payload.doc.data())).optionC,
            optionD: JSON.parse(JSON.stringify(item.payload.doc.data())).optionD,
            answer: JSON.parse(JSON.stringify(item.payload.doc.data())).answer,
          } as Quiz);
          this.isLoaded = true;
        });
      });
  }

}
