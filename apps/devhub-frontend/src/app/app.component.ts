import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent, AppFooterComponent } from '@devhub-workspace/ui';

@Component({
  imports: [RouterModule, AppHeaderComponent, AppFooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Devhub #Frontend';

  ngOnInit(): void {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
