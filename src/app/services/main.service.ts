// Angular
import { Injectable } from '@angular/core';

// Models
import { Detail, Tile } from 'src/app/models';

// Data
import tiles from 'src/assets/data/tiles.json';
import details from 'src/assets/data/details.json';

@Injectable()
export class MainService {

  provideProjectTiles(): Tile[] {
    return tiles.projectTiles;
  }

  provideWritingTiles(): Tile[] {
    return tiles.writingTiles;
  }

  getDetail(id: string): Detail {
    return details[id];
  }
}
