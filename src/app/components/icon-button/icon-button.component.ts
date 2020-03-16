import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-icon-button',
  template: `
    <a mat-icon-button [href]="url">
      <mat-icon class="material-icons">{{ icon }}</mat-icon>
    </a>
  `
})
export class IconButtonComponent {
  @Input() url: string;
  @Input() icon: string;
}
