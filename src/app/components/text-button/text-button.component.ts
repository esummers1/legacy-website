import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-text-button',
  template: `
    <a mat-button [href]="url">
      {{ text }}
    </a>
  `
})
export class TextButtonComponent {
  @Input() url: string;
  @Input() text: string;
}
