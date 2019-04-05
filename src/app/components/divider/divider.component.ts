import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-divider',
  template: `
    <mat-toolbar color="accent">
      {{ text }}

      <es-icon-button
        *ngIf="repoLink"
        class="actions"
        [url]="repoLink"
        icon="code">
      </es-icon-button>
    </mat-toolbar>
  `,
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() repoLink: string;
  @Input() text: string;
}
