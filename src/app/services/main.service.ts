// Angular
import { Injectable } from '@angular/core';

// Models
import { Tile } from 'src/app/models';

// Data
import * as tiles from 'src/assets/data/tiles.json';

@Injectable()
export class MainService {

  provideProjectTiles(): Tile[] {
    return tiles.projectTiles;
  }

  provideWritingTiles(): Tile[] {
    return tiles.writingTiles;
  }
}
