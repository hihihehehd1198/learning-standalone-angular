import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoStore } from './store/todo.store';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { TodoItem } from './store/type';
import { ValidatepipePipe } from './store/validatepipe.pipe';
import { TodoItemComponent } from './todo-item/todo-item.component';
@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, ValidatepipePipe, TodoItemComponent],
  providers: [TodoStore],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTodoComponent implements OnInit, AfterViewInit {
  private readonly todoStore = inject(TodoStore);

  private cd = inject(ChangeDetectorRef);
  listTodo: Observable<TodoItem[]>;
  constructor() {}

  ngOnInit() {
    // listTodo.pipe(tap((x) => this.listTodo.next(x)))
    this.listTodo = this.todoStore
      .select((state) => state.listTodo)
      .pipe(
        tap((x) => {
          this.cd.markForCheck();
          return x;
        })
      );
  }
  ngAfterViewInit() {
    this.cd.markForCheck();
  }
  /**
   * add todo from input
   */
  addTodo(e: any): void {
    const id = +(Math.random() * 10);
    e.code.toString().toLowerCase().includes('enter') &&
      this.todoStore.addTodo({ id, note: e.target.value });
  }
}
