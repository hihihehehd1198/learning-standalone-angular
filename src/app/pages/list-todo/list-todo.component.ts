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
  template: `<p>pages/todo/list-todo works!</p>

  <input (keydown)="addTodo($event)" type="text" placeholder="your todo ...." />
  <!-- <ng-container *ngIf="listTodo | async | validatepipe"> -->
  <ul>
    <li *ngFor="let item of listTodo | async">
      <app-todo-item
        [todoItem]="item"
        (deleteTodoProps)="deleteTodoEvent(item.id)"
      ></app-todo-item>
    </li>
  </ul>
  <!-- </ng-container> -->
  <router-outlet></router-outlet>
  `,
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
    if (e.code.toString().toLowerCase().includes('enter')) {
      this.todoStore.addTodo({ id, note: e.target.value });
      e.target.value = '';
    }
  }
  deleteTodoEvent(id: number) {
    this.todoStore.removeTodo(id);
  }
}
