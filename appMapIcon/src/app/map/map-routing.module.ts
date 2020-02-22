import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map.component';
import { SvgComponent } from './svg/svg.component';

const routes: Routes = [
  { path: 'map', component: MapComponent},
  { path: 'svg', component: SvgComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
