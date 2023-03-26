import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { FormComponent } from '../../layout/form/form.component';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {
  quiz: Quiz = {} as Quiz;
  quizList: Quiz[] = [];
  isLoaded: boolean = false;

  formInputData: any = {
    formTitles: ['ID', 'Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer', 'Answer Index'],
    formControlNames: ['id', 'question', 'optionA', 'optionB', 'optionC', 'optionD', 'answer', 'ansIndex'],
    inputFormGroup: new FormGroup({
      id: new FormControl(''),
      question: new FormControl(''),
      optionA: new FormControl(''),
      optionB: new FormControl(''),
      optionC: new FormControl(''),
      optionD: new FormControl(''),
      answer: new FormControl(''),
      ansIndex: new FormControl('')
    }),
    component: FormComponent
  };

  tableData: any = {
    data: this.quizList,
    columns: [
      // {key: 'index', label: '#'},
      {key: 'question', label: 'Question'},
      {key: 'optionA', label: 'Option A'},
      {key: 'optionB', label: 'Option B'},
      {key: 'optionC', label: 'Option C'},
      {key: 'optionD', label: 'Option D'},
      {key: 'answer', label: 'Answer'},
      {key: 'ansIndex', label: 'Answer Index'},
      {key: 'action', label: 'Action'},
    ]
  };

  constructor(private qs: QuizService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'DarkCyan';
    // document.body.style.backgroundImage = 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)';
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
            ansIndex: JSON.parse(JSON.stringify(item.payload.doc.data())).ansIndex
          } as Quiz);
          this.isLoaded = true;
        });
        /*
        this.quizList = res.map(item=>item.payload.doc.data() as Quiz);
        this.isLoaded = true;
        */
      });
  }

}
