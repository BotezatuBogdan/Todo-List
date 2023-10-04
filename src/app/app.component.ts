import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'list';

  newTask: string = '';
  incompleteTasks: string[] = [];
  completeTasks: string[] = [];


  addTask() {
    if (this.newTask.trim() !== '') {
      this.incompleteTasks.push(this.newTask);
      this.newTask = '';
    }

    console.log(this.incompleteTasks);
    
  }

  completeTask(task: string) {
    const index = this.incompleteTasks.indexOf(task);
    if (index !== -1) {
      this.incompleteTasks.splice(index, 1);
      this.completeTasks.push(task);       
    }
  }

  incompleteTask(task: string) {
    const index = this.completeTasks.indexOf(task);
    if (index !== -1) {
      this.completeTasks.splice(index, 1);
      this.incompleteTasks.push(task);       
    }
  }

  deleteIncompleteTask(index: number) {
    if (index >= 0 && index < this.incompleteTasks.length) {
      this.incompleteTasks.splice(index, 1);
    }
  }

  deleteCompleteTask(index: number) {
    if (index >= 0 && index < this.completeTasks.length) {
      this.completeTasks.splice(index, 1); 
    }
  }

}
