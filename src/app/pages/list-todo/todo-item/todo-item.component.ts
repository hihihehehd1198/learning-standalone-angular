import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { TodoItem } from '../store/type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit, AfterContentInit {
  @Input() todoItem: TodoItem;
  @Output() deleteTodoProps: EventEmitter<any> = new EventEmitter<number>();
  ngOnInit() {}

  ngAfterContentInit() {}
  deleteTodo(id: number) {
    
    this.deleteTodoProps.emit(id);
  }
}
