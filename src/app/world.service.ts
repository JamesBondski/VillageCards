import { Injectable } from '@angular/core';
import { World } from 'src/game/world';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  private _world: World;

  constructor() { }

  getWorld(): World {
    if(!this._world) {
      this._world = new World();
    }
    return this._world;
  }
}
