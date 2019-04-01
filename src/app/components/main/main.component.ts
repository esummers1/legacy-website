// Angular
import { Component, OnInit } from "@angular/core";

// Services
import { MainService } from 'src/app/services';

// Models
import { Tile } from 'src/app/models';

@Component({
  selector: 'es-main',
  template: `
    <div class="main-container">
      <mat-toolbar color="primary">
        Eddie Summers
      </mat-toolbar>

      <es-divider text="Projects"></es-divider>

      <es-tile *ngFor="let tile of tiles" [tile]="tile">
      </es-tile>

      <es-divider text="Writing"></es-divider>
    </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tiles: Tile[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.tiles = this.mainService.provideTiles();
  }

}
