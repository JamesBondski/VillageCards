import { WorldService } from './../world.service';
import { Component, OnInit } from '@angular/core';
import { World } from 'src/game/world';

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
}
