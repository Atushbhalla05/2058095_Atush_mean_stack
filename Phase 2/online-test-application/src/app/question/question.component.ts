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
    //console.log(enteredAnswers);
    let correctAnswers:number = 0;
    for(let question of this.allQuestions.entries()){
      //console.log(question[1]);
      let currQuestion = question[1]["question"];
      if(question[1]["correctAnswer"] === enteredAnswers[currQuestion]){
       // console.log("Correct Answer");
        correctAnswers++;
      }
    }
   // console.log(correctAnswers);

    if(correctAnswers>6){
      this.scoreMessage = "Result: " + correctAnswers.toString() + "/10 Pass";
    }
    else{
      this.scoreMessage = "Result: " + correctAnswers.toString() + "/10 Fail";
    }
  }
}
