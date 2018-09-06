import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './newgame/newgame.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [{path:'', component: WorldComponent},{path:'new', component: NewGameComponent}]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
