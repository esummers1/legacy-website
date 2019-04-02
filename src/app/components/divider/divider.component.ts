import { Component, Input } from '@angular/core';

@Component({
  selector: 'es-divider',
  template: `
    <h2 class="divider__heading">
      {{ text }}
    </h2>
    
    <mat-divider></mat-divider>
  `,
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() text: string;
}
