// Angular
import { Component, OnInit } from "@angular/core";

// Services
import { MainService } from 'src/app/services';

// Models
import { Tile } from 'src/app/models';

@Component({
  selector: 'es-main',
  template: `
    <div class="main__container">

      <es-header-bar
        text="Eddie Summers"
        [showBack]="false">
      </es-header-bar>

      <es-divider
        text="Projects">
      </es-divider>

      <es-tile
        *ngFor="let tile of projectTiles"
        [tile]="tile">
      </es-tile>

      <es-divider
        text="Writing">
      </es-divider>

      <es-tile
        *ngFor="let tile of writingTiles"
        [tile]="tile">
      </es-tile>

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
