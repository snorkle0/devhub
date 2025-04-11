import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TypedWriterComponent } from '@devhub-workspace/ui';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TypedWriterComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  titles = ['Frontend Developer', 'Angular Enthusiast', 'Cloud Tinkerer'];
}
