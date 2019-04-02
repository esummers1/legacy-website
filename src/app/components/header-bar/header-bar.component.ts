import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-header-bar',
  template: `
    <mat-toolbar color="primary">

      <es-icon-button
        *ngIf="showBack"
        url="/main"
        icon="arrow_back">
      </es-icon-button>

      {{ text }}

      <span class="header-bar__actions">
        <es-icon-button
          url="https://github.com/esummers1"
          icon="code">
        </es-icon-button>

        <es-icon-button
          url="https://www.linkedin.com/in/eddiesummers/"
          icon="face">
        </es-icon-button>

        <es-icon-button
          url="mailto:eddie.summers1@gmail.com"
          icon="question_answer">
        </es-icon-button>
      </span>
    </mat-toolbar>
  `,
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Input() text: string;
  @Input() showBack: boolean = true;
}