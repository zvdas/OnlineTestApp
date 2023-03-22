import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  msg='';

  formInputData: any = {
    formTitles: ['Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer', 'Answer Index'],
    formControlNames: ['question', 'optionA', 'optionB', 'optionC', 'optionD', 'answer', 'ansIndex'],
    inputFormGroup: new FormGroup({
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
      {key: 'index', label: '#'},
      {key: 'question', label: 'Question'},
      /*
      {key: 'options[0]', label: 'Option A'},
      {key: 'options[1]', label: 'Option B'},
      {key: 'options[2]', label: 'Option C'},
      {key: 'options[3]', label: 'Option D'},
      */
      {key: 'optionA', label: 'Option A'},
      {key: 'optionB', label: 'Option B'},
      {key: 'optionC', label: 'Option C'},
      {key: 'optionD', label: 'Option D'},
      {key: 'answer', label: 'Answer'},
      {key: 'ansIndex', label: 'Answer Index'},
      {key: 'action', label: 'Action'},
    ]
  };

  constructor(private qs: QuizService, private router: Router) { }
  
  ngOnInit(): void {
    document.body.style.backgroundColor = 'DarkCyan';
    // document.body.style.backgroundImage = 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)';
    this.getQuizList();
  }
  
  updateQuizForm(quizData: any) {
    this.qs.addQuizDetails(quizData);
      /*
      {
      id: '',
      question: quizData['question'],
      /*
      options: [
        quizData['optionA'],
        quizData['optionB'],
        quizData['optionC'],
        quizData['optionD']
      ],
      optionA: 
      answer: quizData['answer'],
      ansIndex: quizData['ansIndex']
    })
    */
  }
  
  getQuizList() {
    this.qs
      .getQuizDetails()
      .subscribe(res => {
        res.map(item => {
          this.quizList.push({
            id: item.payload.doc.id,
            question: JSON.parse(JSON.stringify(item.payload.doc.data())).question,
            // options: JSON.parse(JSON.stringify(item.payload.doc.data())).options,
            optionA: JSON.parse(JSON.stringify(item.payload.doc.data())).optionA,
            optionB: JSON.parse(JSON.stringify(item.payload.doc.data())).optionB,
            optionC: JSON.parse(JSON.stringify(item.payload.doc.data())).optionC,
            optionD: JSON.parse(JSON.stringify(item.payload.doc.data())).optionD,
            answer: JSON.parse(JSON.stringify(item.payload.doc.data())).answer,
            ansIndex: JSON.parse(JSON.stringify(item.payload.doc.data())).ansIndex
          } as Quiz)
          this.isLoaded = true;
        })
        /*
        this.quizList = res.map(item=>item.payload.doc.data() as Quiz);
        this.isLoaded = true;
        */
      })
  }

  /*
  getTableData() {
    console.log(this.quizList);
    this.tableData = {
      data: this.quizList,
      columns: [
        {key: 'index', label: '#'},
        {key: 'question', label: 'Question'},
        {key: 'options[0]', label: 'Option A'},
        {key: 'options[1]', label: 'Option B'},
        {key: 'options[2]', label: 'Option C'},
        {key: 'options[3]', label: 'Option D'},
        {key: 'answer', label: 'Answer'},
        {key: 'ansIndex', label: 'Answer Index'},
        {key: 'action', label: 'Action'},
      ]
    };
  }
  */

  /*
  getQuizById(id: string){
    this.qs.getQuizByID(id).subscribe(
      // response => console.log(response),
      response => {this.quiz = response.payload.data() as Quiz},
      error => console.log(error),
      () => console.log('completed')
    )
    // console.log(`get quiz: ${JSON.stringify(this.quiz)} id: ${id}`)
  }
  
  addQuiz(){
    // console.log(`add  quiz: ${JSON.stringify(this.quiz)}`)
    this.qs.addQuizDetails(this.quiz);
    this.msg = "Quiz added successfully.";
  }
  
  updateQuiz(){
    console.log(`update quiz: ${this.quiz}`)
    this.qs.updateQuizDetails(this.quiz.id, this.quiz);
    this.msg = "Quiz updated successfully.";
  }
  
  deleteQuiz(id: string){
    this.qs.deleteQuizDetails(id);
    this.msg = "Quiz deleted successfully.";
  }
  
  goToUserMaster(){
    this.router.navigate(['/userMaster'])
  }
  */

}
