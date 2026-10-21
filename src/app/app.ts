import { Component, signal } from '@angular/core';
import { FirstComponent } from './components/first-component/first-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FirstComponent]
})
export class App {
  protected readonly title = signal('course-angular');
}
