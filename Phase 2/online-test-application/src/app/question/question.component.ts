import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Question } from '../question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  allQuestions:Question[] = new Array();
  examForm:FormGroup;
  scoreMessage:string = "";
  constructor(public questionSer:QuestionService, public form:FormBuilder) {
    this.examForm = form.group({});
  }
  
  showQuestions(){
    this.questionSer.getQuestionsInfo().subscribe(questions => {
      this.allQuestions = questions;
    });

  }

  ngOnInit(): void {
    this.allQuestions.forEach(q => {
      console.log(this.examForm);
      this.examForm.addControl(q.question,this.form.control(""));
    })
    this.showQuestions();
  }

  checkAnswers(examForm:NgForm){
    let enteredAnswers = examForm.value;
    console.log(enteredAnswers);
    let corrAnswers:number = 0;
   /* for(let i = 0; i < enteredAnswers; i++){

    }*/
  }

}
