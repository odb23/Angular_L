import { todoAnimation } from './todo.animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: todoAnimation,
})
export class TodoComponent {
  items = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance',
  ];

  constructor() {}

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item: string) {
    const idx = this.items.indexOf(item);
    this.items.splice(idx, 1);
  }
}
