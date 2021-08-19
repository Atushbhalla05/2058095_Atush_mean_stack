import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksForm = new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    task :new FormControl("",[Validators.required]),
    deadline:new FormControl("",[Validators.required])
  });

  allTasks:Array<TaskService> = new Array();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    let taskInfo = this.tasksForm.value;
    this.allTasks.push(new TaskService(taskInfo.id,taskInfo.name,taskInfo.task,taskInfo.deadline))
  }
}
