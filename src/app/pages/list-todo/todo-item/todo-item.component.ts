import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit, AfterContentChecked {
  cd = inject(ChangeDetectorRef);

  ngOnInit() {}

  ngAfterContentChecked() {
    // this.cd.detectChanges();
  }
}
