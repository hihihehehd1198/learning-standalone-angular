import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApolloModule } from 'apollo-angular';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApolloModule],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
