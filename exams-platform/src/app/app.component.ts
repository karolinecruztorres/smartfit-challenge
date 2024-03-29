import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ContainerWrapperComponent } from './container/container-wrapper/container-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContainerWrapperComponent,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'exams-platform';
}
