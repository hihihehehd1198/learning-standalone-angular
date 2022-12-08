import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
