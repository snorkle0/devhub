import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  standalone: true
})
export class AppHeaderComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Apply saved theme
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Use OS preference as default
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply the theme on initialization
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    
    // Save preference to localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
