import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface tasks {
  title: string;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title!: FormControl;
  public description!: FormControl;

  public taskForm!: FormGroup;
  public arraysTask: tasks[] = [];

  constructor() {
    this.initForm();
  }

  updateTaskStatus(task: { done: any }, event: { detail: { checked: any } }) {
    task.done = event.detail.checked;
  }

  public registerTask() {
    console.log(this.taskForm.value);
    this.arraysTask.push(this.taskForm.value);
    console.log(this.taskForm);
    this.taskForm.reset();
  }

  private initForm() {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.description = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]);

    this.taskForm = new FormGroup({
      title: this.title,
      description: this.description,
    });
  }
}
