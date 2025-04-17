import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class AppFooterComponent {
  currentYear = new Date().getFullYear();
  appName = 'Devhub';
  appVersion = '1.0.0';
  authorName = 'Igor Paszkiewicz';
  authorLinkedIn = 'www.linkedin.com/in/igor-paszkiewicz-6a573195';
  authorGithub = 'https://github.com/snorkle0';
}
