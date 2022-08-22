import { Component } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: [],
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics?.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(index: number) {
    this.topics.removeAt(index);
  }
}
