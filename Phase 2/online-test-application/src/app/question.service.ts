import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public http:HttpClient) { }
  getQuestionsInfo(): Observable<Question[]>{
   // console.log(this.http.get<Question[]>('/assets/questions.json'));
    return this.http.get<Question[]>('/assets/questions.json');
  }
}
