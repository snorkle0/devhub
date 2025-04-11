import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterService } from './typed-writer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-typed-writer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="variant">
      <h1 *ngSwitchCase="'h1'" class="text-base sm:text-lg text-gray-800 mb-8 font-bold">
        <span>{{ animatedText$ | async }}</span>
      </h1>
      <h2 *ngSwitchCase="'h2'" class="text-base sm:text-md text-gray-800 mb-8 font-bold">
        <span>{{ animatedText$ | async }}</span>
      </h2>
      <div *ngSwitchDefault class="text-base sm:text-sm text-gray-800 mb-8 font-bold">
        <span>{{ animatedText$ | async }}</span>
      </div>
    </ng-container>
  `,
})
export class TypedWriterComponent implements OnInit {
  @Input() titles: string[] = [];
  @Input() variant: 'h1' | 'h2' | 'div' = 'div';
  animatedText$!: Observable<string>;

  constructor(private typewriterService: TypewriterService) {}

  ngOnInit(): void {
    this.animatedText$ = this.typewriterService.getTypewriterEffect(this.titles);
  }
}