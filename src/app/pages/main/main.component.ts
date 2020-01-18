// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { MainService } from 'src/app/services';

// Models
import { Tile } from 'src/app/models';

@Component({
  selector: 'es-main',
  template: `
    <es-header-bar
      [showBack]="false">
    </es-header-bar>

    <div class="container">

      <es-divider
        text="Projects">
      </es-divider>

      <div class="tile-grouping__container">
        <es-tile
          *ngFor="let tile of projectTiles"
          [tile]="tile">
        </es-tile>
      </div>

      <es-divider
        text="Writing">
      </es-divider>

      <div class="tile-grouping__container">
        <es-tile
          *ngFor="let tile of writingTiles"
          [tile]="tile">
        </es-tile>
      </div>

    </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  projectTiles: Tile[];
  writingTiles: Tile[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.projectTiles = this.mainService.provideProjectTiles();
    this.writingTiles = this.mainService.provideWritingTiles();
  }

}
