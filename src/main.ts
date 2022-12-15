import './polyfills';

import {
  enableProdMode,
  importProvidersFrom,
  InjectionToken,
} from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/build/http';
import { provideEffects } from '@ngrx/effects/src/provide_effects';
import { AppEffects } from './app/app.effect';
import { provideStore } from '@ngrx/store/src/provide_store';
enableProdMode();

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

/**
 * URL GRAPHQL SAMPLE
 */
const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // our GraphQL API

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(RoutingTree)),
    provideStore(),
  ],
});
