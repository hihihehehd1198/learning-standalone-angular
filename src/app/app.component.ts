import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
