import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-layout-container',
  imports: [CommonModule],
  templateUrl: './layout-container.component.html',
})
export class LayoutContainerComponent implements OnInit {
  @HostBinding('class') className = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.className = prefersDark ? 'dark' : '';
  }
}
