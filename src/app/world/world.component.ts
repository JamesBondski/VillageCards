import { WorldService } from './../world.service';
import { Component, OnInit } from '@angular/core';
import { World } from 'src/game/world';
import { Resources } from 'src/game/resources';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  world: World;

  constructor(private worldService: WorldService) { 
    this.world = worldService.getWorld();
  }

  ngOnInit() {
  }

  onTurnClick() {
    this.world.turn();
  }

  getResources(): string[] {
    var keys: string[];
    keys=Object.keys(Resources);
    return keys.splice(0, keys.length/2);
  }

  getResourceName(index:string): string {
    return Object.values(Resources)[index];
  }
}
