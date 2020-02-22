import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { SharedModule } from '../shared/shared.module';
import { SvgComponent } from './svg/svg.component';
import { DropSvgComponent } from './drop-svg/drop-svg.component';
import { PickupComponent } from './pickup/pickup.component';


@NgModule({
  declarations: [MapComponent, SvgComponent, DropSvgComponent, PickupComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule
  ]
})
export class MapModule { }
