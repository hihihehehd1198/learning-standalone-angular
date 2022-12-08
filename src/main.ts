import './polyfills';

import { importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';

const RoutingTree: Routes = [
  {
    path: '**',
    redirectTo: 'todo',
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./app/pages/list-todo/list-todo.component').then(
        (x) => x.ListTodoComponent
      ),
    children: [
      {
        path: 'todo-item',
        loadComponent: () =>
          import('./app/pages/list-todo/todo-item/todo-item.component').then(
            (y) => y.TodoItemComponent
          ),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(RoutingTree))],
});
