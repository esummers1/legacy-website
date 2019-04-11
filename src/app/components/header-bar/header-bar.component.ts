import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-header-bar',
  template: `
    <mat-toolbar color="primary">

      <es-icon-button
        *ngIf="showBack"
        url="/home"
        icon="arrow_back">
      </es-icon-button>

      Eddie Summers

      <span class="actions">
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
          icon="email">
        </es-icon-button>
      </span>
    </mat-toolbar>
  `
})
export class HeaderBarComponent {
  @Input() showBack: boolean = true;
}
