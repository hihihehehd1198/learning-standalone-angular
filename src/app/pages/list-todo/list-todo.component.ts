import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class ListTodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
