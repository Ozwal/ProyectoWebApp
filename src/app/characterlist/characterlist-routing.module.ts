import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterlistPage } from './characterlist.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterlistPageRoutingModule {}
