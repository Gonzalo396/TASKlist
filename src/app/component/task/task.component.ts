import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[]= TASK;
  constructor() { }

  ngOnInit(): void {
  }

}
