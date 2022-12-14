import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InMemoryCache } from '@apollo/client';
import { Apollo, ApolloModule, APOLLO_OPTIONS, gql } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/build/http';
import { tap } from 'rxjs';

const uri = 'https://api.spacex.land/graphql/'; // our GraphQL API

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  private apollo = inject(Apollo);
  ngOnInit() {
    console.log(this.apollo);
    this.apollo
      .watchQuery({
        query: gql`
          {
            launchesPast(limit: 10) {
              mission_name
              launch_date_local
              launch_site {
                site_name_long
              }
            }
          }
        `,
      })
      .valueChanges.pipe(tap((x) => console.log(x)))
      .subscribe();
  }
}
