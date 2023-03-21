import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})

export class QuizMasterComponent implements OnInit {

  quiz: Quiz = {} as Quiz;
  quizList: Quiz[] = [];
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
    })
  };

  tableData: any = {
    data: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ],
    columns: [
      {key: 'position', label: 'Position'},
      {key: 'name', label: 'Name'},
      {key: 'weight', label: 'Weight'},
      {key: 'symbol', label: 'Symbol'},
      {key: 'action', label: 'Action'},
    ]
  };

  constructor(private qs: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.showAll();
  }
  
  showAll(){
    this.qs.getQuizDetails().subscribe(
      // response => console.log(response),
      response => {this.quizList = response.map(res=>res.payload.doc.data() as Quiz)},
      error => console.log(error),
      () => console.log('completed')
    )
    console.log(`show quiz: ${JSON.stringify(this.quizList)}`)
  }

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
    console.log(`add  quiz: ${JSON.stringify(this.quiz)}`)
    this.qs.addQuizDetails(this.quiz);
    this.msg = "Quiz added successfully.";
  }
  
  updateQuiz(){
    /*
    console.log(`update quiz: ${this.quiz}`)
    this.qs.updateQuizDetails(this.quiz.id, this.quiz);
    this.msg = "Quiz updated successfully.";
    */
  }
  
  deleteQuiz(id: string){
    this.qs.deleteQuizDetails(id);
    this.msg = "Quiz deleted successfully.";
  }
  
  goToUserMaster(){
    this.router.navigate(['/userMaster'])
  }

  // this.redirect.emit(this.formInputData);

}
