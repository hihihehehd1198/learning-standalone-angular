import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { TodoItem, TodoState } from './type';
@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  constructor() {
    super({ listTodo: [] });
  }

  readonly listTodo: Observable<TodoItem[]> = this.select(
    (state) => state.listTodo
  );
  /**
   * add todo with id
   * @param todo
   */
  readonly addTodo = this.updater((state, todo: TodoItem) => ({
    listTodo: [...state.listTodo, todo],
  }));

  /**
   * remove todo with id
   * @param todo using id
   */
  readonly removeTodo = this.updater((state, todo: TodoItem) => {
    state.listTodo.splice(
      [...state.listTodo].findIndex((x) => x.id === todo.id),
      1
    );
    return { listTodo: [...state.listTodo] };
  });

  /**
   * edit todo store with id
   * @param todo  id , note
   */
  readonly editTodo = this.updater((state, todo: TodoItem) => {
    state.listTodo.map((x) => {
      if (state.listTodo.find((y) => y.id === todo.id)) {
        return todo;
      }
      return x;
    });
    return { listTodo: [...state.listTodo] };
  });

  /**
   * get todo with id
   * @param id number
   */
  readonly getTodoWithId = (id: number) => {
    return this.select((state) => state.listTodo.find((x) => x.id === id));
  };
}
