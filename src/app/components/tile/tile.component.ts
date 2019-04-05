// Angular
import { Component, Input } from '@angular/core';

// Models
import { Tile } from 'src/app/models';

@Component({
  selector: 'es-tile',
  template: `
    <mat-card class="tile__container">

      <mat-card-header>
        <mat-card-title>
          {{ tile.title }}
        </mat-card-title>
        
        <mat-card-subtitle>
          {{ tile.subtitle }}
        </mat-card-subtitle>
      </mat-card-header>

      <img
        mat-card-image
        class="tile__image"
        [src]="tile.image"
        alt="Preview of {{tile.title}}" />

      <mat-card-content>
       {{ tile.blurb }}
      </mat-card-content>

      <mat-card-actions>
        <es-text-button
          text="MORE"
          [url]="getDetailLink()">
        </es-text-button>

        <es-text-button
          *ngIf="tile.repoLink"
          text="SOURCE"
          [url]="tile.repoLink">
        </es-text-button>
      </mat-card-actions>

    </mat-card>
  `,
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile: Tile;

  getDetailLink(): string {
    return 'detail/' + this.tile.id;
  }
}
